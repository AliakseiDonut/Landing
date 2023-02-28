const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector(".menu");

burgerMenu.addEventListener('click',(event) => {
    menu.classList.toggle("hidden");
})