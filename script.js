const slides = document.querySelectorAll('.slide');
const pointers = document.querySelectorAll('.poiter');
const slip = document.querySelectorAll('.slip');
const pointer = document.querySelectorAll('.poiters');
let currentSlide = 0;

function hideCurrentSlide() {
    slides[currentSlide].style.marginLeft = '-100vw';
    slides[currentSlide].style.visibility = 'hidden';
    slip[currentSlide].style.marginLeft = '-100vw';
    slip[currentSlide].style.visibility = 'hidden';
    pointers[currentSlide].classList.remove('active');
    pointer[currentSlide].classList.remove('active');
    
}

function showNextSlide() {
    currentSlide = (currentSlide + 1) % slides.length, slip.length;
    slides[currentSlide].style.marginLeft = '0vw';
    slides[currentSlide].style.visibility = 'visible';
    pointers[currentSlide].classList.add('active');
    slip[currentSlide].style.marginLeft = '0vw';
    slip[currentSlide].style.visibility = 'visible';
    pointer[currentSlide].classList.add('active');
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
pointer.forEach((pointers, index) => {
    pointers.addEventListener('click', () => {
        clearInterval(slideInterval);
        hideCurrentSlide();
        currentSlide = index;
        showNextSlide();
        slideInterval = setInterval(nextSlide, 5000);
        
    });
});





