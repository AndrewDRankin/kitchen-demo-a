let header = document.getElementById('header');

window.addEventListener('scroll', () => {
    window.pageYOffset > 150 ? header.classList.add('header--opaque') : header.classList.remove('header--opaque')
});
