// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Scroll header effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
        header.style.boxShadow = window.scrollY > 50 
            ? '0 2px 20px rgba(0, 0, 0, 0.1)' 
            : '0 2px 20px rgba(0, 0, 0, 0.05)';
    }
});
