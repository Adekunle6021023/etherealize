var menuToggle = document.querySelector('.hamburger-wrapper');
var Burger = document.querySelector('.hamburger');
var Nav = document.querySelector('.nav');
var navList = document.querySelector('.nav-list');
var menuItems =  document.querySelector('.nav-link');


menuToggle.addEventListener('click', Toggler);
var menuDisplay = false;

function Toggler() {
    if (!menuDisplay) {
        menuToggle.classList.add('fixer');
        Burger.classList.add('open');
        Nav.classList.add('color-change');
        navList.classList.add('show');
        menuDisplay = true;
    } else {
        Burger.classList.remove('open');
        menuToggle.classList.remove('fixer');
        Nav.classList.remove('color-change');
        navList.classList.remove('show');
        menuDisplay = false;
    }

}
