# 📝 Öğrenci Görevleri

Görevleri **sırayla** yap. Her aşama bir öncekinin üstüne inşa edilir.
Bir göreve başlamadan önce ilgili dosyayı aç ve yorum satırlarını oku.


KENDI SEKTÖRÜNÜ SEÇ VE ONA GÖRE UYARLA

Görevleri **sırayla** yap. Her aşama bir öncekinin üstüne inşa edilir.
Bir göreve başlamadan önce ilgili dosyayı aç ve yorum satırlarını oku.


 Kendi Markanı İnşa Et
Bu e-ticaret altyapısını kullanarak kendi hayalindeki mağazayı kuracaksın.

Sektörünü Seç: Ayakkabı, teknoloji, uçak bileti, organik gıda... Ne satmak istersin?

Metinleri Uyarla: urunler.html ve urun-detay.html dosyalarındaki sahte içerikleri silip, kendi ürünlerinin isimlerini, özelliklerini ve fiyatlarını yaz.

Görselleri Topla: Temana uygun, telifsiz görseller bularak img/ klasörüne ekle ve projeye bağla.

Stilini Yansıt: Kurumsal bir marka mısın, yoksa dinamik ve genç mi? css/style.css üzerinden sitenin ana renklerini markana göre baştan tasarla.

---

## 🟢 Seviye 1 — Tanıma ve Küçük Değişiklikler

1. `index.html` dosyasını tarayıcıda aç. Sayfadaki tüm bölümleri (topbar,
   navbar, hero, kategoriler, ürünler, video, bülten, footer) tek tek
   incele ve her birinin HTML kodunda nerede başlayıp bittiğini bul.
2. `css/style.css` içindeki `:root` bloğunda `--color-accent` değerini
   başka bir renge çevir (örn. mavi tonu `#2c5f8a`). Sitenin genelinde
   nelerin değiştiğini gözlemle ve bir liste çıkar.
3. `--font-display` değişkenini Google Fonts'tan seçtiğin başka bir
   fontla değiştir (fontu `<head>` içindeki `<link>` etiketine de eklemeyi
   unutma).
4. Navbar'daki marka adını (`ATÖLYE`) kendi seçtiğin bir marka ismiyle
   değiştir. Logo emojisini de değiştir.

## 🟡 Seviye 2 — HTML Yapısını Anlama

5. `index.html`'deki hero bölümünde kaç tane `<section>` var? Sayfanın
   tamamında kaç tane `<section>`, kaç tane `<article>` kullanılmış? Sayıp
   bir tabloya yaz.
6. `iletisim.html` sayfasındaki formda kullanılan TÜM input tiplerinin
   bir listesini çıkar (`type="..."` değerlerine bak). Her biri için
   "bu neden bu input tipiyle yazılmış?" sorusunu cevapla.
7. `urun-detay.html` içindeki tabloyu (`<table>`) bul. `<thead>`, `<tbody>`,
   `<th>`, `<td>` etiketlerinin görevlerini kendi cümlelerinle açıkla.
8. Yeni bir satır ekle: teknik özellikler tablosuna "Renk Seçenekleri"
   satırı ekle.

## 🟠 Seviye 3 — Yeni Ürün Kartı Ekleme

9. `urunler.html` içine, mevcut `.product-card` yapısını KOPYALAYIP
   yeni bir ürün ekle (kendi hayalindeki bir ürün olsun). `data-id`
   değerinin BENZERSİZ (örn. `urun-007`) olmasına dikkat et.
10. Yeni eklediğin ürünün "Sepete Ekle" butonuna tıkla, navbar'daki
    sepet rozetinin arttığını gözlemle. `sepet.html` sayfasını aç,
    ürünün orada göründüğünü doğrula.
11. `index.html` ana sayfasındaki "Öne Çıkan Ürünler" bölümüne de kendi
    ürününü ekle.

## 🔴 Seviye 4 — CSS Layout (Flexbox / Grid)

12. `css/layout.css` içindeki `.footer-top`'un `grid-template-columns`
    değerini `1.4fr 1fr 1fr 1.2fr` yerine 5 kolonlu bir yapıya çevir ve
    footer'a yeni bir kolon (örn. "Sıkça Sorulan Sorular") ekle.
13. `.hero-stats` bölümüne (flexbox) 5. bir istatistik kartı ekle
    (örn. "50+ Şehre Kargo").
14. `css/components.css` içindeki `.category-grid`'in kolon sayısını
    4'ten 3'e düşür, görsel dengeyi nasıl etkilediğini gözlemle.

## 🟣 Seviye 5 — Responsive Tasarım

15. Tarayıcıda F12 (Geliştirici Araçları) açıp "responsive mode"a geç.
    Ekran genişliğini yavaşça daralt. Hangi genişliklerde (breakpoint)
    navbar'ın hamburger menüye dönüştüğünü, hero'nun tek kolona indiğini
    ve footer kolonlarının azaldığını not al.
16. `css/responsive.css` içine YENİ bir breakpoint ekle: 400px altı için
    `.hero h1` yazı boyutunu küçült.
17. Kendi eklediğin ürün kartının küçük ekranlarda düzgün göründüğünden
    emin ol; gerekiyorsa `product-grid`'in `minmax()` değerini ayarla.

## ⚪ Seviye 6 — Etkileşim (JavaScript'e giriş, opsiyonel)

18. `js/cart.js` dosyasını aç, sadece YORUM satırlarını oku (kod satırlarını
    değil). `sepeteEkle`, `sepettenSil`, `adetGuncelle` fonksiyonlarının
    NE YAPTIĞINI (nasıl yaptığını değil) kendi cümlelerinle özetle.
19. `sepet.html` sayfasında bir ürünü sil, sayfayı YENİLE (F5), ürünün
    hâlâ silinmiş olduğunu doğrula. Bunun neden mümkün olduğunu (ipucu:
    `localStorage`) araştır ve bir paragrafla açıkla.

---

### 💡 Genel Kural
Her görevden sonra tarayıcıyı yenile ve DEĞİŞİKLİĞİ GÖZLE gör. "Kodu
yazdım ama sonucu görmedim" asla olmasın — CSS ve HTML öğrenmenin en hızlı
yolu, değiştir → yenile → gözlemle döngüsüdür.
