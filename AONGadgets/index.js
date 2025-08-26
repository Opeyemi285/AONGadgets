const container = document.querySelector('ol.categories-list');
const rightArrow = document.querySelector('.right');
const leftArrow = document.querySelector('.left');


rightArrow.addEventListener('click', () => {
    const nextItem = container.querySelector('.list');
    container.scrollBy({
        left: nextItem.offsetWidth,
        behavior: 'smooth'
    });
});

leftArrow.addEventListener('click', () => {
    const prevItem = container.querySelector('.list');
    container.scrollBy({
        left: -prevItem.offsetWidth,
        behavior: 'smooth'
    });
});