const BurgerButton = document.querySelector('.button-burger')
const BurgerMenu = document.querySelector('.header__menu')

BurgerButton.addEventListener('click', function () {
    BurgerMenu.classList.toggle('active')
})

const swiper = new Swiper('.section-slider__swiper', {
    // Optional parameters
    autoplay: {
        delay: 2000,
    },
    direction: 'horizontal',
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        paginationClickable: true,
        type: 'bullets',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
//-------прокрутка------//
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    })
}
