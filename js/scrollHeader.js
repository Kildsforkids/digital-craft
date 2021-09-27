const header = document.getElementById('header')
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

    windowScroll = scrollY
})