const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
    themeIcon.classList.replace("fa-moon", "fa-sun");
}

themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    const isDark = document.documentElement.classList.contains("dark");
    themeIcon.classList.toggle("fa-moon", !isDark);
    themeIcon.classList.toggle("fa-sun", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
});

AOS.init({ duration: 10, once: true });
