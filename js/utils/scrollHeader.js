const header = document.getElementById('header')
const sliderJoin = {
    element: document.getElementById('slider-join'),
    hidden: false
}
const join = document.getElementById('join')
let windowScroll = scrollY

window.addEventListener('scroll', () => {
    if (windowScroll < scrollY) {
        header.classList.remove('move-down')
        header.classList.add('move-up')
    } else {
        header.classList.remove('move-up')
        header.classList.add('move-down')
        header.classList.add('header-shadow')
    }

    if (scrollY === 0) {
        header.classList.remove('header-shadow')
    }

    if (sliderJoin.element.getBoundingClientRect().y <= 0) {
        if (!sliderJoin.hidden) {
            join.classList.remove('hidden')
            sliderJoin.hidden = true
        }
    } else {
        if (sliderJoin.hidden) {
            join.classList.add('hidden')
            sliderJoin.hidden = false
        }
    }

    windowScroll = scrollY
})