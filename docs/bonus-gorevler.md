# 🚀 Bonus Görevler

Temel görevleri bitirdin ve daha fazla zorlanmak mı istiyorsun? İşte
seni gerçek bir e-ticaret sitesine biraz daha yaklaştıracak görevler.
Bunlar zorunlu DEĞİLDİR ama seni bir sonraki seviyeye taşır.

## 🎨 CSS Ustalığı

1. **Karanlık Mod (Dark Mode)**: `:root` içine ikinci bir renk seti
   tanımla (örn. `--color-bg-dark`) ve navbar'a bir "🌙 Karanlık Mod"
   butonu ekleyerek `body`'e bir class ekleyip/kaldırarak temayı
   değiştir. (İpucu: CSS değişkenlerini `body.dark-mode` seçicisiyle
   override edebilirsin.)
2. **Skeleton Loading**: Ürün kartlarına, görsel yüklenmeden önce
   gösterilecek gri "iskelet" (skeleton) animasyonu ekle
   (`@keyframes shimmer` kullanarak).
3. **Scroll-Reveal**: Sayfa aşağı kaydırıldıkça bölümlerin (Intersection
   Observer + CSS class ile) yumuşakça belirmesini sağla.
4. **Özel Scrollbar**: `::-webkit-scrollbar` pseudo-elementiyle sitenin
   kaydırma çubuğunu marka renklerine uygun tasarla.

## 🧩 Bootstrap Derinleşme

5. Bootstrap'in `Modal` bileşenini kullanarak, bir ürüne tıklanınca
   ürün detayının açılır pencerede (modal) gösterilmesini sağla.
6. Bootstrap `Toast` bileşeniyle, "Sepete Eklendi ✓" bildirimini
   ekranın köşesinde birkaç saniyeliğine göster.
7. Bootstrap `Accordion` bileşeniyle bir "Sıkça Sorulan Sorular" (SSS)
   bölümü ekle.

## 🛒 Fonksiyonellik (JS ile)

8. Sepet sayfasına, kupon kodu girildiğinde (örn. "ATOLYE10" yazınca)
   toplam tutardan %10 indirim uygulayan basit bir mantık ekle.
9. Ürünler sayfasındaki arama kutusuna gerçek zamanlı filtreleme ekle:
   kullanıcı yazarken, eşleşmeyen ürün kartlarını gizle.
10. "Son Görüntülenen Ürünler" bölümü ekle: kullanıcı bir ürün detayına
    girdikçe, bu ürünü `localStorage`'da ayrı bir listede tut ve
    ana sayfada göster.
11. Favorilere ekleme (♡ butonu) özelliğini `cart.js`'teki mantığa
    benzer şekilde gerçek çalışır hale getir (ayrı bir localStorage
    anahtarıyla).

## 📐 Performans ve Kalite

12. [Lighthouse](https://developer.chrome.com/docs/lighthouse/) (Chrome
    Geliştirici Araçları içinde) ile siteni analiz et; Performans,
    Erişilebilirlik ve SEO puanlarını not al. En düşük puanlı alanı
    iyileştirmeye çalış.
13. Tüm görselleri `loading="lazy"` özniteliğiyle geç yükle (yalnızca
    ekrana yaklaşınca yüklensinler) ve sayfa yükleme hızındaki farkı
    gözlemle.
14. CSS dosyalarını (style, layout, components, responsive) TEK bir
    dosyada birleştirip performans farkını karşılaştır — sonra neden
    ayrı dosyalar kullanmanın bakım (maintenance) açısından daha
    mantıklı olduğunu bir paragrafla savun.

## 🌍 Gerçek Dünya Simülasyonu

15. Ürünler için bir JSON dosyası (`data/urunler.json`) oluştur ve
    `fetch()` ile bu veriyi çekip ürün kartlarını JavaScript ile
    OTOMATİK oluştur (şu an elle yazılmış HTML kartlarını dinamik hale
    getir). Bu, React'e geçmeden önce atacağın en önemli adımlardan biri!
16. Basit bir "admin paneli" hayal et: `urunler.json`'a yeni bir ürün
    eklemek için (sadece tarayıcıda, sunucu olmadan) bir form tasarla
    ve eklenen ürünü ekranda anlık göster (localStorage'a kaydederek).

---

💬 Bu bonus görevlerin çoğu JavaScript ve ileride React bilgisi
gerektirir — hepsini şimdi bitirmen beklenmiyor. Bu liste, "sırada ne
öğreneceğim?" sorusuna bir yol haritası olsun diye buraya eklendi.
