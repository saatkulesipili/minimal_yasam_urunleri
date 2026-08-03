/* =====================================================================
   main.js — Sitenin genel etkileşimleri
   =====================================================================
   NOT: Proje temel olarak HTML/CSS/Bootstrap öğretimi için hazırlandı.
   Ancak "sepete ekle / sepetten sil" gibi ürünün ÇALIŞMASI gereken
   özellikler JavaScript olmadan mümkün değil. Bu yüzden bu dosyalarda
   basit, bol yorumlu, "vanilla JS" (kütüphanesiz) kod kullandık.
   Bu kodları ŞİMDİ ezberlemen gerekmiyor — nasıl çalıştığını
   okuyup merak etmen yeterli. JS dersine geldiğinde buraya geri döneceğiz.
   ===================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  /* -------------------------------------------------------------
     1) MOBİL MENÜ (hamburger) AÇMA/KAPAMA
  ------------------------------------------------------------- */
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      navLinks.classList.toggle("open");
      // Erişilebilirlik: butonun durumunu ekran okuyuculara bildir
      const isOpen = navLinks.classList.contains("open");
      navToggle.setAttribute("aria-expanded", isOpen);
    });
  }

  /* -------------------------------------------------------------
     2) DROPDOWN MENÜ (Kategoriler) — mobilde tıklayarak açma
  ------------------------------------------------------------- */
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
  dropdownToggles.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const parent = btn.closest(".nav-item-dropdown");
      // Diğer açık dropdown'ları kapat (aynı anda tek menü açık olsun)
      document.querySelectorAll(".nav-item-dropdown.open").forEach(function (openItem) {
        if (openItem !== parent) openItem.classList.remove("open");
      });
      parent.classList.toggle("open");
    });
  });

  // Sayfanın başka bir yerine tıklanınca açık dropdown'ları kapat
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".nav-item-dropdown")) {
      document.querySelectorAll(".nav-item-dropdown.open").forEach(function (item) {
        item.classList.remove("open");
      });
    }
  });

  /* -------------------------------------------------------------
     3) "YUKARI ÇIK" BUTONU
     Sayfa belli bir miktar kaydırılınca buton görünür,
     tıklanınca sayfa başına yumuşakça (smooth) döner.
  ------------------------------------------------------------- */
  const backToTopBtn = document.querySelector(".back-to-top");
  if (backToTopBtn) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    });

    backToTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* -------------------------------------------------------------
     4) SEKME (TAB) SİSTEMİ — ürün detay sayfasında
     "Açıklama / Yorumlar / Kargo & İade" sekmeleri arasında geçiş
  ------------------------------------------------------------- */
  const tabButtons = document.querySelectorAll(".tab-btn");
  tabButtons.forEach(function (tabBtn) {
    tabBtn.addEventListener("click", function () {
      const targetId = tabBtn.getAttribute("data-tab-target");

      // Önce tüm buton ve panellerden 'active' sınıfını kaldır
      document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach((p) => p.classList.remove("active"));

      // Sonra sadece tıklanana 'active' ekle
      tabBtn.classList.add("active");
      document.getElementById(targetId).classList.add("active");
    });
  });

  /* -------------------------------------------------------------
     5) ARAMA KUTUSU — basit demo (gerçek arama sunucu ister)
  ------------------------------------------------------------- */
  const searchForm = document.querySelector(".navbar-search");
  if (searchForm) {
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const input = searchForm.querySelector("input");
      if (input.value.trim() !== "") {
        alert("Arama demo: \"" + input.value + "\" için sonuçlar listelenecek.");
      }
    });
  }
});
