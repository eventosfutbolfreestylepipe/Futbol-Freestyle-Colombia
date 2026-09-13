document.addEventListener('DOMContentLoaded', () => {
    
    /* 1. SLIDESHOW CINEMATOGRÁFICO DE RECUERDOS */
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    // Si existen imágenes, arrancar el ciclo
    if (slides.length > 1) {
        setInterval(() => {
            // Quitar clase active a la actual (hace fade out)
            slides[currentSlide].classList.remove('active');
            
            // Avanzar al siguiente índice
            currentSlide = (currentSlide + 1) % slides.length;
            
            // Poner clase active a la nueva (hace fade in)
            slides[currentSlide].classList.add('active');
        }, 3000); // Cambia de foto cada 3 segundos
    }

    /* 2. ANIMACIONES AL HACER SCROLL */
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    /* 3. MENÚ MÓVIL (Toggle simple) */
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'rgba(10, 12, 16, 0.95)';
            navLinks.style.padding = '20px';
            navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
        }
    });
});
