const toggleMenu = document.getElementById("toggleMenu");
const menu = document.getElementById("menu");

toggleMenu.addEventListener("click", () => {
    menu.classList.toggle("active");
});