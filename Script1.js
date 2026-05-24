const images = document.querySelectorAll('.gallery-img');

images.forEach(img => {
    img.addEventListener('click', () => {
        // toggle המהא÷ ךכאס, ÿךשמ ימדמ םולא÷, ³ גטהאכÿ÷, ÿךשמ ג³ם ÷
        img.classList.toggle('active');
    });
});