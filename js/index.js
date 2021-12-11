$(document).ready(function() {
  $('.header__burger').click(function() {
    $('.header__burger, .header__menu').toggleClass('active');
  })
})

const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const container = document.querySelector('.slides-container');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;

const contactBtns = document.querySelectorAll('.contact');
const modal = document.querySelector('.modal-overlay');
const modalClose = document.querySelector('.modal-close');

contactBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        modal.style.opacity = '1';
        modal.style.pointerEvents = 'auto';
        document.body.style.overflowY = 'hidden';
    });
});

modalClose.addEventListener('click', () => {
    modal.style.opacity = '0';
    modal.style.pointerEvents = 'none';
    document.body.style.overflowY = 'auto';
});

let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener('click', () => {
    changeSlide('up');
});

downBtn.addEventListener('click', () => {
    changeSlide('down');
});

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1;
        }
    }

    const height = container.clientHeight;

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;

    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}