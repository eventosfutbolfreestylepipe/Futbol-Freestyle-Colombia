document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Menú Móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // 2. Animaciones al hacer Scroll (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // El elemento aparece cuando el 15% es visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Solo animar una vez
            }
        });
    }, observerOptions);

    // Seleccionar todos los elementos a animar
    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up, .fade-in-right');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

});
