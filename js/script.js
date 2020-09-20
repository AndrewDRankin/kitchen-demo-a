// Header change
let header = document.getElementById('header');

window.addEventListener('scroll', () => {
    window.pageYOffset > 150 ? header.classList.add('header--opaque') : header.classList.remove('header--opaque')
});

// Menu toggle
let menuButton = document.getElementById('menu-button');
let menuOpen = false;

menuButton.addEventListener('click', () => {
    menuOpen = !menuOpen;
    menuOpen === true ? header.classList.add('menu-open') : header.classList.remove('menu-open');
});
