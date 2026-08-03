/* =====================================================================
   cart.js — SEPET SİSTEMİ (ekle / sil / adet değiştir)
   =====================================================================
   Bu dosya projenin "gerçek e-ticaret" hissi veren kısmıdır.
   Sunucu/veritabanı kullanmadığımız için sepeti tarayıcının
   localStorage'ında saklıyoruz (kapatıp açsan bile sepet unutulmaz).

   ÖĞRENME NOTU: Bu dosyayı satır satır anlaman şu an ZORUNLU değil.
   Önemli olan şu akışı kavraman:
     1. Her üründe "Sepete Ekle" butonuna data-* attribute'ları ile
        ürün bilgisi (id, isim, fiyat, görsel) veriyoruz.
     2. Butona tıklanınca bu bilgi localStorage'a bir DİZİ (array)
        olarak JSON formatında kaydediliyor.
     3. sepet.html açıldığında bu dizi okunup tabloya HTML olarak
        basılıyor (render ediliyor).
     4. Silme/adet değiştirme işlemleri diziyi güncelleyip yeniden
        localStorage'a yazıyor ve ekranı tekrar çiziyor.
   ===================================================================== */

const SEPET_ANAHTARI = "atolye_sepet_v1"; // localStorage'da sepetin saklandığı "anahtar" adı

/* ---------------------------------------------------------------------
   TEMEL YARDIMCI FONKSİYONLAR
--------------------------------------------------------------------- */

// localStorage'dan sepeti oku. Hiç sepet yoksa boş dizi döndür.
function sepetiGetir() {
  const veri = localStorage.getItem(SEPET_ANAHTARI);
  return veri ? JSON.parse(veri) : [];
}

// Sepeti (dizi) JSON'a çevirip localStorage'a kaydet.
function sepetiKaydet(sepet) {
  localStorage.setItem(SEPET_ANAHTARI, JSON.stringify(sepet));
}

// Para formatı: 1250.5 -> "1.250,50 ₺"
function paraFormatla(sayi) {
  return sayi.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " ₺";
}

// Sepetteki toplam ürün ADEDİNİ döndürür (navbar rozeti için)
function sepetAdetToplam() {
  return sepetiGetir().reduce((toplam, urun) => toplam + urun.adet, 0);
}

// Sepetteki toplam TUTARI döndürür
function sepetTutarToplam() {
  return sepetiGetir().reduce((toplam, urun) => toplam + urun.fiyat * urun.adet, 0);
}

/* ---------------------------------------------------------------------
   SEPETE ÜRÜN EKLEME
--------------------------------------------------------------------- */
function sepeteEkle(urun) {
  const sepet = sepetiGetir();

  // Ürün zaten sepette mi diye kontrol et (aynı id varsa adedini artır)
  const mevcutUrun = sepet.find((item) => item.id === urun.id);

  if (mevcutUrun) {
    mevcutUrun.adet += 1;
  } else {
    sepet.push({ ...urun, adet: 1 }); // yeni ürünü adet:1 olarak ekle
  }

  sepetiKaydet(sepet);
  navbarRozetGuncelle();
  return sepet;
}

/* ---------------------------------------------------------------------
   SEPETTEN ÜRÜN SİLME
--------------------------------------------------------------------- */
function sepettenSil(urunId) {
  let sepet = sepetiGetir();
  sepet = sepet.filter((item) => item.id !== urunId); // silinecek id HARİÇ hepsini tut
  sepetiKaydet(sepet);
  navbarRozetGuncelle();
  return sepet;
}

/* ---------------------------------------------------------------------
   ÜRÜN ADEDİNİ GÜNCELLEME (+ / - butonları)
--------------------------------------------------------------------- */
function adetGuncelle(urunId, yeniAdet) {
  let sepet = sepetiGetir();
  const urun = sepet.find((item) => item.id === urunId);
  if (!urun) return sepet;

  if (yeniAdet < 1) yeniAdet = 1; // 0'ın altına inmesin, silmek için ayrı buton var
  urun.adet = yeniAdet;

  sepetiKaydet(sepet);
  navbarRozetGuncelle();
  return sepet;
}

/* ---------------------------------------------------------------------
   NAVBAR'DAKİ SEPET ROZETİNİ (kaç ürün var sayısı) GÜNCELLE
   Bu fonksiyon TÜM sayfalarda çalışır çünkü her sayfada navbar var.
--------------------------------------------------------------------- */
function navbarRozetGuncelle() {
  const rozet = document.querySelector("[data-cart-count]");
  if (rozet) rozet.textContent = sepetAdetToplam();
}

/* ---------------------------------------------------------------------
   SEPET SAYFASINI EKRANA ÇİZME (render)
   sepet.html içinde çağrılır.
--------------------------------------------------------------------- */
function sepetSayfasiniCiz() {
  const govde = document.getElementById("cart-body");       // <tbody id="cart-body">
  const bosMesaji = document.getElementById("cart-empty");   // sepet boşsa gösterilecek alan
  const tablo = document.getElementById("cart-table-wrap");
  const araToplamEl = document.getElementById("summary-subtotal");
  const kargoEl = document.getElementById("summary-shipping");
  const toplamEl = document.getElementById("summary-total");

  if (!govde) return; // bu sayfa sepet sayfası değilse hiçbir şey yapma

  const sepet = sepetiGetir();

  // SEPET BOŞSA: tabloyu gizle, "sepetiniz boş" mesajını göster
  if (sepet.length === 0) {
    if (tablo) tablo.style.display = "none";
    if (bosMesaji) bosMesaji.style.display = "block";
    if (araToplamEl) araToplamEl.textContent = paraFormatla(0);
    if (toplamEl) toplamEl.textContent = paraFormatla(0);
    return;
  }

  if (tablo) tablo.style.display = "block";
  if (bosMesaji) bosMesaji.style.display = "none";

  // Her ürün için bir <tr> HTML'i oluşturup birleştiriyoruz (template literal kullanımı)
  govde.innerHTML = sepet
    .map(
      (urun) => `
    <tr data-row-id="${urun.id}">
      <td>
        <div class="cart-product">
          <img src="${urun.gorsel}" alt="${urun.isim}">
          <div>
            <p class="product-title mb-0">${urun.isim}</p>
            <span class="product-category">${urun.kategori || ""}</span>
          </div>
        </div>
      </td>
      <td class="product-price">${paraFormatla(urun.fiyat)}</td>
      <td>
        <div class="qty-control">
          <button type="button" aria-label="Azalt" data-qty-decrease="${urun.id}">−</button>
          <input type="number" min="1" value="${urun.adet}" data-qty-input="${urun.id}" aria-label="Adet">
          <button type="button" aria-label="Artır" data-qty-increase="${urun.id}">+</button>
        </div>
      </td>
      <td class="product-price">${paraFormatla(urun.fiyat * urun.adet)}</td>
      <td>
        <button type="button" class="btn-remove-item" data-remove-id="${urun.id}" aria-label="Ürünü sepetten sil">
          <i class="bi bi-trash3"></i>
        </button>
      </td>
    </tr>`
    )
    .join("");

  // ÖZET KUTUSU hesaplamaları
  const araToplam = sepetTutarToplam();
  const kargo = araToplam > 500 ? 0 : 49.9; // 500 TL üzeri kargo bedava (demo kural)
  const genelToplam = araToplam + kargo;

  if (araToplamEl) araToplamEl.textContent = paraFormatla(araToplam);
  if (kargoEl) kargoEl.textContent = kargo === 0 ? "Ücretsiz" : paraFormatla(kargo);
  if (toplamEl) toplamEl.textContent = paraFormatla(genelToplam);

  cartButonlariniBagla(); // yeni çizilen +/-/sil butonlarına olay dinleyicisi ekle
}

/* ---------------------------------------------------------------------
   SEPET SAYFASINDAKİ + / − / SİL BUTONLARINA OLAY BAĞLAMA
   Her render sonrası tekrar çağrılır çünkü innerHTML her seferinde
   YENİ elementler oluşturur, eski dinleyiciler kaybolur.
--------------------------------------------------------------------- */
function cartButonlariniBagla() {
  document.querySelectorAll("[data-qty-increase]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-qty-increase");
      const urun = sepetiGetir().find((u) => u.id === id);
      adetGuncelle(id, urun.adet + 1);
      sepetSayfasiniCiz();
    });
  });

  document.querySelectorAll("[data-qty-decrease]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-qty-decrease");
      const urun = sepetiGetir().find((u) => u.id === id);
      if (urun.adet <= 1) return; // 1'in altına inme, silmek için çöp kutusu var
      adetGuncelle(id, urun.adet - 1);
      sepetSayfasiniCiz();
    });
  });

  document.querySelectorAll("[data-qty-input]").forEach((input) => {
    input.addEventListener("change", () => {
      const id = input.getAttribute("data-qty-input");
      const deger = parseInt(input.value, 10) || 1;
      adetGuncelle(id, deger);
      sepetSayfasiniCiz();
    });
  });

  document.querySelectorAll("[data-remove-id]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-remove-id");
      const satir = document.querySelector(`tr[data-row-id="${id}"]`);
      // Önce küçük bir "silme" animasyonu oynat (components.css -> .cart-row-removing),
      // animasyon bitince gerçek veriden de sil ve yeniden çiz.
      if (satir) {
        satir.classList.add("cart-row-removing");
        satir.addEventListener("animationend", () => {
          sepettenSil(id);
          sepetSayfasiniCiz();
        });
      } else {
        sepettenSil(id);
        sepetSayfasiniCiz();
      }
    });
  });
}

/* ---------------------------------------------------------------------
   SAYFA YÜKLENDİĞİNDE ÇALIŞACAK BAŞLANGIÇ KODU
--------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  // 1) Her sayfada navbar rozetini güncel adetle doldur
  navbarRozetGuncelle();

  // 2) Bu sayfa sepet sayfasıysa tabloyu çiz
  sepetSayfasiniCiz();

  // 3) Sayfadaki TÜM "Sepete Ekle" butonlarını bul ve olay bağla
  //    Butonlar data-add-to-cart="true" ve data-id / data-name / data-price / data-image taşır.
  document.querySelectorAll("[data-add-to-cart]").forEach((btn) => {
    btn.addEventListener("click", function () {
      const urun = {
        id: btn.getAttribute("data-id"),
        isim: btn.getAttribute("data-name"),
        fiyat: parseFloat(btn.getAttribute("data-price")),
        gorsel: btn.getAttribute("data-image"),
        kategori: btn.getAttribute("data-category") || "",
      };

      sepeteEkle(urun);

      // Kısa bir görsel geri bildirim: buton "nabız atsın"
      btn.classList.add("pulsing");
      btn.addEventListener("animationend", () => btn.classList.remove("pulsing"), { once: true });

      // Eğer sayfa sepet sayfasıysa tabloyu anında güncelle
      sepetSayfasiniCiz();
    });
  });
});
