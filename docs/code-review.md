# ✅ Code Review Kontrol Listesi

Bir görevi bitirdiğinde ya da kendi eklediğin bir bölümü göndermeden önce
bu listeyi kullanarak kendi kodunu denetle. Eğitmenin de aynı listeyle
seni değerlendirebilir.

## 🏗️ HTML Yapısı

- [ ] Sayfada tam olarak **bir tane** `<main>` var mı?
- [ ] Başlıklar (`h1`→`h2`→`h3`) SIRAYLA mı ilerliyor? (h1'den sonra
      direkt h3'e atlanmamış mı?)
- [ ] Her `<img>` etiketinin anlamlı bir `alt` metni var mı? (Görme
      engelli bir kullanıcı bu metni dinleyecek — "resim1.jpg" gibi
      anlamsız bir alt YANLIŞTIR.)
- [ ] Form elemanlarının hepsinde ilişkili bir `<label for="...">` var mı?
- [ ] Yeni eklediğin HTML doğru şekilde girintili (indent) mi? (Kardeş
      etiketler aynı hizada, iç içe olanlar bir tab içeride olmalı.)
- [ ] Kapatılmamış (`</div>` unutulmuş) etiket var mı? (Tarayıcı konsolunda
      hata var mı kontrol et.)

## 🎨 CSS Kalitesi

- [ ] Yeni class isimlerin anlamlı mı? (`.kutu1` değil `.urun-karti` gibi)
- [ ] Renk / boşluk değerlerini SABİT yazmak yerine mevcut CSS
      değişkenlerini (`var(--color-accent)` gibi) kullandın mı?
- [ ] Aynı stili birden fazla yerde tekrar tekrar YAZMAK yerine ortak bir
      class oluşturdun mu? (DRY prensibi: Don't Repeat Yourself)
- [ ] `!important` kullanmaktan kaçındın mı? (Gerçekten gerekmedikçe
      kullanılmamalı — CSS'in normal öncelik sırasını bozar.)
- [ ] Flexbox/Grid kullanırken gereksiz `float` veya `position:absolute`
      hack'lerine başvurmadın mı?

## 📱 Responsive

- [ ] Değişikliğini 320px (küçük telefon), 768px (tablet) ve 1200px+
      (masaüstü) genişliklerinde test ettin mi?
- [ ] Metin/görsel taşması (overflow) veya üst üste binme var mı?
- [ ] Dokunmatik ekranlarda butonlar yeterince büyük mü (en az ~40px)?

## ♿ Erişilebilirlik

- [ ] Sadece klavye (Tab tuşu) ile gezinerek tüm linklere/butonlara
      ulaşabiliyor musun?
- [ ] Odaklanılan (focus) elemanlarda görünür bir çerçeve var mı?
- [ ] Renk kontrastı yeterli mi? (Açık gri zemin üzerine açık sarı yazı
      gibi okunaksız kombinasyonlardan kaçın.)

## 🧠 Kavrama Kontrolü (kendine sor)

- [ ] Bu bölümde neden `flex` değil `grid` (ya da tam tersini) kullandım?
- [ ] `margin` mi yoksa `padding` mi kullanmam gerekiyordu, neden?
- [ ] Bu elemanın `position` değeri neden `relative`/`absolute`/`fixed`?
- [ ] Eklediğim animasyon/transition kullanıcı deneyimini GERÇEKTEN
      iyileştiriyor mu, yoksa sadece gösteriş mi?

## 🔍 Son Kontrol

- [ ] Tarayıcı konsolunda (F12 → Console) kırmızı hata var mı?
- [ ] Sayfa başlığı (`<title>`) sayfanın içeriğiyle uyumlu mu?
- [ ] Tüm linkler doğru sayfaya gidiyor mu (kırık link yok mu)?
