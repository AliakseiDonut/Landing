const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector(".menu");
const lines = document.querySelectorAll(".line");

burgerMenu.addEventListener('click',(event) => {
    menu.classList.toggle("menu-hidden");
    burgerMenu.classList.toggle("burger-menu-active");
    lines.forEach(element => {
        element.classList.toggle("line-active");
    });
})