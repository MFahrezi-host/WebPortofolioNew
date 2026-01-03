/* ============================== 
   1. Typing Animation 
   ============================== */
var typed = new Typed(".typing", {
  strings: ["Web Designer", "Web Developer", "Freelancer", "YouTuber"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

/* ============================== 
   2. Navigasi & Active Section Logic 
   ============================== */
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

// Loop setiap link di sidebar
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    // Hapus kelas 'active' dari semua section
    for (let j = 0; j < totalSection; j++) {
      allSection[j].classList.remove("active");
    }

    // Hapus kelas 'active' dari semua link sidebar
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        // Opsional: Tambahkan efek 'back-section' jika ingin animasi tumpuk
      }
      navList[j].querySelector("a").classList.remove("active");
    }

    // Tambah kelas 'active' ke link yang diklik
    this.classList.add("active");

    // Tampilkan section yang sesuai
    showSection(this);

    // Jika di mobile (sidebar tertutup), tutup sidebar setelah klik
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function showSection(element) {
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

/* ============================== 
   3. Toggle Sidebar (Hamburger Menu) 
   ============================== */
const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  // Geser konten utama jika sidebar terbuka (opsional)
  // for(let i=0; i<totalSection; i++) {
  //     allSection[i].classList.toggle("open");
  // }
}

/* ============================== 
   4. Style Switcher (Ganti Warna & Dark Mode) 
   ============================== */

// Toggle Panel
document
  .querySelector(".style-switcher-toggler")
  .addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
  });

// Sembunyikan panel saat scroll
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

// Fungsi Ganti Warna Utama
function setActiveStyle(color) {
  document.documentElement.style.setProperty("--skin-color", color);
}

// Fungsi Dark Mode
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});

// Cek mode saat load
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});
