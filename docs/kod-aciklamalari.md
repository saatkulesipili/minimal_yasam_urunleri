# 📘 Kod Açıklamaları

Bu doküman, projedeki dosyaların **neden** o şekilde yazıldığını, hangi
CSS/HTML kavramının **nerede** kullanıldığını anlatır. Kodun içindeki
yorum satırlarıyla birlikte oku.

---

## 1) HTML — Semantic Etiketler Nerede Kullanıldı?

Her sayfada aynı iskelet tekrar eder:

```html
<header>        <!-- topbar + navbar: sitenin "başlığı" -->
  <nav>...</nav>  <!-- gezinme linkleri burada -->
</header>

<main>          <!-- sayfaya ÖZGÜ asıl içerik, sayfada SADECE 1 tane olur -->
  <section>...</section>   <!-- konu bazlı bölüm (hero, kategoriler, ürünler...) -->
  <article>...</article>   <!-- kendi başına anlamlı, tek bir "parça" (bir ürün, bir yorum) -->
  <aside>...</aside>       <!-- ana içerikle ilişkili ama yan/ikincil bilgi (filtre kutusu) -->
</main>

<footer>...</footer>       <!-- sitenin alt bilgisi -->
```

**Neden `<div>` değil de bu etiketler?**
`<div>` hiçbir anlam taşımaz, sadece bir kutudur. `<header>`, `<nav>`,
`<main>` gibi etiketler ise ekran okuyuculara (görme engelli kullanıcılar
için) ve arama motorlarına "burası navigasyon", "burası ana içerik" gibi
bilgi verir. Bu hem **erişilebilirlik** hem **SEO** için önemlidir.

## 2) Formlar ve Input Tipleri (`iletisim.html`)

`iletisim.html` sayfası, HTML'in sunduğu hemen hemen tüm form
elemanlarını içerir:

| Etiket / type | Nerede kullanıldı | Ne işe yarar |
|---|---|---|
| `type="text"` | Ad Soyad | Genel kısa metin |
| `type="email"` | E-posta | Tarayıcı otomatik e-posta formatı kontrolü yapar |
| `type="tel"` | Telefon | Mobilde numerik klavye açılır |
| `type="date"` | Teslim tarihi | Tarayıcı yerleşik takvim gösterir |
| `type="range"` | Bütçe / fiyat aralığı | Kaydırarak sayısal değer seçimi |
| `type="radio"` | İletişim tercihi | Aynı `name`'e sahip seçeneklerden SADECE biri seçilir |
| `type="checkbox"` | KVKK onayı, kategori filtresi | Birden fazla seçenek işaretlenebilir |
| `type="file"` | Referans görsel | Dosya yükleme |
| `type="color"` | Renk tercihi | Renk seçici açar |
| `<select>` | Konu, sıralama | Açılır liste, tek seçim |
| `<textarea>` | Mesaj | Çok satırlı serbest metin |
| `<button>` | Formu gönder, sepete ekle | Tıklanabilir aksiyon |

`required`, `minlength`, `pattern` gibi öznitelikler (attribute) tarayıcıya
**JavaScript yazmadan** temel doğrulama (validation) yaptırır.

## 3) CSS Değişkenleri (`css/style.css` → `:root`)

```css
:root {
  --color-accent: #b5651d;
}
.btn-atolye { background: var(--color-accent); }
```

`:root` içine yazılan `--degisken-adi` tüm CSS dosyalarında `var(--degisken-adi)`
ile kullanılabilir. Marka rengini değiştirmek istersen SADECE `:root`
içindeki tek satırı değiştirmen yeterli — tüm site otomatik güncellenir.

## 4) Box Model

Her HTML elemanı görünmez bir "kutu"dur:

```
┌───────────── margin (dış boşluk) ─────────────┐
│ ┌──────────── border (çerçeve) ─────────────┐ │
│ │ ┌────────── padding (iç boşluk) ────────┐ │ │
│ │ │         içerik (width/height)          │ │ │
│ │ └────────────────────────────────────────┘ │ │
│ └──────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────┘
```

`* { box-sizing: border-box; }` satırı (style.css'te) `padding` ve
`border`'ın `width` değerine EKLENMEK yerine `width`'in İÇİNE dahil
olmasını sağlar. Bunsuz, `width:200px; padding:20px;` yazan bir kutu
gerçekte 240px genişliğinde olurdu — bu da düzen hesaplarını karman
çorman eder. `border-box` bu karmaşayı ortadan kaldırır.

## 5) Flexbox Nerede Kullanıldı?

Flexbox, elemanları **tek bir satır veya sütunda** hizalamak için idealdir.
Örnekler: `.navbar-atolye`, `.topbar-inner`, `.hero-stats`, `.product-footer`.

```css
.navbar-atolye {
  display: flex;
  justify-content: space-between; /* elemanları iki uca yasla */
  align-items: center;             /* dikeyde ortala */
  gap: 1rem;                       /* elemanlar arası boşluk */
}
```

## 6) Grid Nerede Kullanıldı?

Grid, **satır VE sütunları aynı anda** kontrol etmek gerektiğinde
Flexbox'tan daha güçlüdür. Örnekler: `.hero-inner` (2 kolon), `.footer-top`
(4 kolon), `.product-grid` (otomatik responsive kolonlar), `.category-grid`.

```css
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}
```

`repeat(auto-fit, minmax(240px, 1fr))` şu demektir: *"Her kutu en az 240px
olsun, sığdığı kadar kolon oluştur, kalan boşluğu eşit dağıt."* Bu satır
tek başına TÜM responsive ürün grid'ini media query YAZMADAN çözer.

## 7) Position ve Z-Index

- `position: sticky` → `.site-header`'da: sayfa kaydırılınca üstte yapışır.
- `position: fixed` → `.back-to-top`'ta: sayfa neresinde olursan ol, hep
  aynı ekran noktasında durur.
- `position: absolute` → `.dropdown-menu`'de: en yakın `position: relative`
  olan ebeveyne (`.nav-item-dropdown`) göre konumlanır.
- `z-index` → Bu üç eleman birbiriyle çakışmasın diye "kat numarası"
  verir. Sadece `position` değeri `static` OLMAYAN elemanlarda çalışır.

## 8) Transition, Animation, Transform

- **Transition**: bir CSS özelliğindeki değişimi (renk, boyut, konum)
  ANİ değil YUMUŞAK yapar. Örn: `a:hover` renk değişimi.
- **Transform**: elemanı görsel olarak döndürür/büyütür/kaydırır —
  sayfa akışını (layout) ETKİLEMEZ, bu yüzden performanslıdır.
  Örn: `.product-card:hover { transform: translateY(-6px); }`
- **Animation + @keyframes**: transition'dan farklı olarak KENDİ BAŞINA,
  bir tetikleyici olmadan da çalışabilen, çok adımlı hareket tanımlarız.
  Örn: `@keyframes fadeUp` — ürün kartlarının sayfa açılışında belirmesi.

## 9) clamp(), object-fit, overflow

- `clamp(min, tercih, max)` → responsive yazı boyutu. Ekran küçüldükçe
  yazı küçülür ama asla `min` değerinin altına inmez.
- `object-fit: cover` → bir görseli, ORANINI BOZMADAN verilen kutuya
  sığdırıp taşan kısımları kırpar. Ürün kartlarında tüm görsellerin
  aynı boyutta ve düzgün görünmesini sağlar.
- `overflow-x: hidden` (body'de) → yatayda taşan herhangi bir elemanın
  sayfada yatay kaydırma çubuğu oluşturmasını engeller.

## 10) JavaScript Dosyaları (Kısaca)

- **`main.js`**: mobil menü açma/kapama, dropdown, "yukarı çık" butonu,
  ürün detay sayfasındaki sekme (tab) sistemi.
- **`cart.js`**: "Sepete Ekle" butonlarına tıklanınca ürünü `localStorage`'a
  kaydeder; `sepet.html` açıldığında bu veriyi okuyup tabloyu oluşturur;
  adet değiştirme ve silme işlemlerini yönetir.

Bu iki dosyayı şu an ezberlemene GEREK YOK. Fonksiyon isimlerinin Türkçe
ve açıklayıcı olmasının sebebi, akışı (add → save → render) rahatça takip
edebilmen. JavaScript dersine geldiğinde bu dosyaya geri dönüp satır satır
inceleyeceğiz.
