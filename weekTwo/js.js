const myHeading = document.getElementById('myHeading');
const menuOpen= document.getElementById('menu_open');
const mobileMenu= document.getElementById('mobile-menu');
const menuClose= document.getElementById('menu_close');

myHeading.addEventListener('click',() => {
    myHeading.innerHTML = 'Have a Good Time!';
});

menuOpen.addEventListener('click',() => {
    mobileMenu.style.display = 'inline-flex';
});

menuClose.addEventListener('click',() => {
    mobileMenu.style.display = 'none';
});