const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    nav.classList.toggle('active');
});