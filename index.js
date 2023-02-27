const burgerMenu = document.querySelector('.burger-menu');
const line = document.querySelectorAll(".line");
const menu = document.querySelector(".menu");


burgerMenu.addEventListener('click',(event) => {
    line[0].classList.toggle('first-line-active');
    line[1].classList.toggle('hidden');
    line[2].classList.toggle('second-line-active');
    menu.classList.toggle("hidden");
})