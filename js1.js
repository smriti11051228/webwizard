// JavaScript to toggle the navigation menu on small screens
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');
    const menuButton = document.getElementById('menu-button');

    function toggleMenu() {
        nav.classList.toggle('responsive');
    }

    menuButton.addEventListener('click', toggleMenu);
});
