const mobileNav = document.querySelector('.ul-navigation');
const burgerIcon = document.querySelector('.burger');

document.addEventListener('DOMContentLoaded', function() {
    const sliderItems = document.querySelectorAll('.slider-item');
    let currentItem = 0;
    const animationDuration = 3000; // 3 seconds

    function changeItem() {
        sliderItems[currentItem].classList.remove('active');
        currentItem++;
        if (currentItem >= sliderItems.length) {
            currentItem = 0;
        }
        sliderItems[currentItem].classList.add('active');
    }

    setInterval(changeItem, animationDuration);
});

burgerIcon.addEventListener('click', function () {
    mobileNav.classList.toggle('active');
    burgerIcon.classList.toggle('active');

})