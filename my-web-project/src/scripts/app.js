// app.js
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.animate');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    const hoverElements = document.querySelectorAll('.hover-animate');
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.classList.add('scale-up');
        });
        element.addEventListener('mouseleave', () => {
            element.classList.remove('scale-up');
        });
    });
});