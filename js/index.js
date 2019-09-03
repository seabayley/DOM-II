// Your code goes here
document.querySelectorAll('.nav-link').forEach(elem => {
    elem.addEventListener('mouseenter', event => {
        elem.style.transform = 'scale(1.2)';
    });

    elem.addEventListener('mouseleave', event => {
        elem.style.transform = 'scale(1.0)';
    });
});