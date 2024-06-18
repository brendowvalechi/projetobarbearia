let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
    if (currentSlide >= slides.length - 1) {
        currentSlide = 0;
    }
}

function prevSlide() {
    showSlide(currentSlide - 1);
    if (currentSlide <= 0) {
        currentSlide = slides.length - 1;
    }
}

// Inicializar o slider na primeira imagem
showSlide(currentSlide);