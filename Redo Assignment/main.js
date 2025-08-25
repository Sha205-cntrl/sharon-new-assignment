const menuBtn = document.getElementById("menu_btn");
const navLinks = document.querySelector(".nav_links");
const menuBtnIcon = menuBtn ? menuBtn.querySelector("i") : null;

window.addEventListener("DOMContentLoaded", () => {
    if (!menuBtn || !navLinks || !menuBtnIcon) {
        console.error("Required elements not found");
        return;
    }
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("open");
        menuBtnIcon.classList.toggle("fa-bars");
        menuBtnIcon.classList.toggle("fa-close");
    });
});