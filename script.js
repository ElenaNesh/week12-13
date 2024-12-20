const burgerMenu = document.getElementById('burger-menu');
const tabletMenu = document.getElementById('tablet-menu');
const closetabletMenu = document.getElementById('close-tablet-menu');

burgerMenu.addEventListener('click', () => {
    tabletMenu.classList.toggle('active');
});

closetabletMenu.addEventListener('click', () => {
    tabletMenu.classList.remove('active');
});

const burgerMenumobile = document.getElementById('burger-menu-mobile');
const mobileMenu = document.getElementById('mobile-menu');
const closemobileMenu = document.getElementById('close-mobile-menu');

burgerMenumobile.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

closemobileMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});
