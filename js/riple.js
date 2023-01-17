//подія  кліку по кнопці//
document.addEventListener('click', function (e) {
    const targetItem = e.target
    if (targetItem.closest('[data-ripple]')) {
        // константи //
        const button = targetItem.closest('[data-ripple]')
        const ripple = document.createElement('span')
        const diameter = Math.max(button.clientWidth, button.clientHeight)
        const radius = diameter / 2

        // формування елементу //
        ripple.style.width = ripple.style.height = `${diameter}px`
        ripple.style.left = `${
            e.containerX -
            (button.getBoundingClientRect().left + scrollX) -
            radius
        }px`
        ripple.style.top = `${
            e.containerY -
            (button.getBoundingClientRect().top + scrollY) -
            radius
        }px`
        ripple.classList.add('ripple')
        button.dataset.ripple === 'once' && button.querySelector('.ripple')
            ? button.querySelector('.ripple').remove()
            : null

        // додавання елементу //
        button.appendChild(ripple)

        // отримання часу анімації //
        const timeOut = getAnimationDuration(ripple)

        // функція отримання часу анімації //
        setTimeout(() => {
            ripple ? ripple.remove() : null
        }, timeOut)
        // видалення елемента //
        function getAnimationDuration() {
            const aDuration = window.getComputedStyle(ripple).animationDuration
            return aDuration.includes('ms')
                ? aDuration.replace('ms', '')
                : aDuration.replace('s', '') * 1000
        }
    }
})
