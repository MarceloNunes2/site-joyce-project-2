const slides = document.querySelectorAll('.slide');
const pointers = document.querySelectorAll('.poiter');
let currentSlide = 0;

function hideCurrentSlide() {
    slides[currentSlide].style.marginLeft = '-100vw';
    slides[currentSlide].style.visibility = 'hidden';
    pointers[currentSlide].classList.remove('active');
}

function showNextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.marginLeft = '0vw';
    slides[currentSlide].style.visibility = 'visible';
    pointers[currentSlide].classList.add('active');
}

function nextSlide() {
    hideCurrentSlide();
    showNextSlide();
}

let slideInterval = setInterval(nextSlide, 5000);

pointers.forEach((pointer, index) => {
    pointer.addEventListener('click', () => {
        clearInterval(slideInterval);
        hideCurrentSlide();
        currentSlide = index;
        showNextSlide();
        slideInterval = setInterval(nextSlide, 5000);
    });
});