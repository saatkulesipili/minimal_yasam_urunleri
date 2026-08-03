# 🪵 ATÖLYE — HTML / CSS / Bootstrap E-Ticaret Eğitim Projesi

Bu proje, **HTML, CSS ve Bootstrap** öğrenen öğrenciler için adım adım
hazırlanmış,hataların da olduğu gerçekçi ve kapsamlı bir e-ticaret sitesi örneğidir.
Site, el yapımı ürünler satan hayali bir marka olan **ATÖLYE** temasıyla
kurgulanmıştır.

> 🎯 **Amaç:** Sadece "güzel görünen" bir site değil, gerçek bir projede
> karşılaşacağın klasör yapısını, kod organizasyonunu ve HTML/CSS
> kavramlarının pratikte nasıl kullanıldığını öğrenmek.

---

## 📁 Klasör Yapısı

```
ecommerce-egitim-projesi/
│
├── index.html              → Ana sayfa (Hero, istatistik, ürünler, video)
├── urunler.html             → Ürün listeleme sayfası (filtre formu, grid)
├── urun-detay.html          → Ürün detay sayfası (sekmeler, tablo, galeri)
├── sepet.html                → Sepet sayfası (JS ile ekle/sil çalışır)
├── iletisim.html              → İletişim sayfası (tüm form input tipleri, harita)
├── hakkimizda.html           → Kurumsal sayfa (semantic etiketler, video/audio)
│
├── css/
│   ├── style.css             → Değişkenler (:root), reset, tipografi, box model
│   ├── layout.css            → Header, navbar, hero, footer (flex & grid)
│   ├── components.css        → Ürün kartı, form, sepet, sekme, animasyonlar
│   └── responsive.css        → Tüm media query'ler (responsive tasarım)
│
├── js/
│   ├── main.js                → Navbar, dropdown, yukarı-çık, sekme sistemi
│   └── cart.js                → Sepete ekleme / silme / adet güncelleme
│
├── img/                       → (Kendi görsellerini eklemek istersen)
│
├── docs/
│   ├── kod-aciklamalari.md     → Kodun mantığının detaylı anlatımı
│   ├── ogrenci-gorevleri.md    → Sırayla yapman gereken alıştırmalar
│   ├── code-review.md          → Kod inceleme kontrol listesi
│   └── bonus-gorevler.md       → İleri seviye bonus görevler
│
└── README.md                  → Bu dosya
```

**Neden bu şekilde ayırdık?**
- HTML dosyaları **görünen içeriği (yapı)**, CSS **görünümü**, JS **davranışı**
  temsil eder. Bu ayrım (separation of concerns) profesyonel projelerde
  altın kuraldır.
- `css/` klasöründeki 4 dosya birbirinin üstüne inşa edilir:
  `style.css` (temel) → `layout.css` (iskelet) → `components.css` (parçalar)
  → `responsive.css` (küçük ekran düzeltmeleri). HTML dosyalarında bu sırayla
  linklenmelidir.

---

## 🚀 Projeyi Çalıştırma

1. Klasörü bilgisayarına indir / kopyala.
2. `index.html` dosyasına çift tıklayarak tarayıcıda aç
   **veya** VS Code kullanıyorsan "Live Server" eklentisiyle çalıştır
   (canlı yeniden yükleme için önerilir).
3. Bootstrap, Bootstrap Icons ve Google Fonts **CDN** üzerinden yüklenir,
   bu yüzden internet bağlantısına ihtiyaç vardır.

---

## 🧩 Kullanılan Teknolojiler

| Teknoloji | Kullanım Amacı |
|---|---|
| HTML5 | Sayfa yapısı, semantic etiketler, formlar |
| CSS3 | Görünüm, box model, flexbox, grid, animasyon |
| Bootstrap 5 | Grid sistemi (row/col), hazır bileşenler (breadcrumb, pagination) |
| Bootstrap Icons | İkonlar (sepet, arama, sosyal medya vb.) |
| Vanilla JavaScript | Sepet mantığı, dropdown, sekmeler, yukarı-çık butonu |
| localStorage | Sepetin tarayıcıda kalıcı saklanması |

> Not: Bu proje temel olarak **HTML/CSS/Bootstrap öğretimi** içindir.
> JavaScript kısmı (özellikle `cart.js`) sepetin GERÇEKTEN çalışması için
> gereklidir ve bol yorumludur — JS dersine geldiğinde tekrar okuyup
> satır satır anlayabilirsin.

---

## 📖 Nasıl Çalışmalısın?

1. Önce `docs/kod-aciklamalari.md` dosyasını oku — kodun "neden böyle"
   yazıldığını anlat.
2. Sonra `docs/ogrenci-gorevleri.md` içindeki görevleri **sırayla** yap.
   Her görev bir öncekinin üzerine inşa edilir.
3. Bir görevi bitirince `docs/code-review.md` içindeki kontrol listesiyle
   kendi kodunu denetle.
4. Kendini geliştirmek istersen `docs/bonus-gorevler.md` içindeki
   zorlayıcı görevlere göz at.

## ✅ Bu Projede Öğreneceklerin

**HTML:** semantic etiketler (`header`, `nav`, `main`, `section`, `article`,
`footer`, `aside`), formlar ve tüm input tipleri, `button`, linkler, resimler,
`video`, `audio`, listeler, tablolar, `iframe`, meta etiketleri ve temel SEO.

**CSS:** selector'lar, box model (margin/padding/border/width/height),
`display`, `position`, `float`, Flexbox, Grid, responsive tasarım / media query,
`transition`, `animation` (`@keyframes`), `transform`, CSS değişkenleri
(`:root` / `var()`), `clamp()`, `object-fit`, `overflow`, `z-index`.

**Bonus:** localStorage ile veri saklama, temel DOM manipülasyonu.


🔗 **Live Demo**
https://goknurgurz.github.io/ecommerce-egitim-projesi/

📚 Eğitim amaçlı hazırlanmış çok sayfalı e-ticaret sitesi.

İyi çalışmalar! 🎨🛠️
