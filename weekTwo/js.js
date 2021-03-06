const myHeading = document.getElementById('myHeading');
const menuOpen= document.getElementById('menu_open');
const mobileMenu= document.getElementById('mobile-menu');
const menuClose= document.getElementById('menu_close');
const actionBotton = document.querySelector('input');
const HidenBox = document.querySelector('.hidenbox');

myHeading.addEventListener('click',() => {
    myHeading.innerHTML = 'Have a Good Time!';
});

menuOpen.addEventListener('click',() => {
    mobileMenu.style.display = 'inline-flex';
    mobileMenu.style.right = '0%';
});

menuClose.addEventListener('click',() => {
    mobileMenu.style.display = 'none';
});

actionBotton.addEventListener('click',() => {
    HidenBox.style.display = 'block';
});