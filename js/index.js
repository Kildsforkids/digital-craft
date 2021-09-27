import Slider from './slider.js'
// import TypeWriter from './typewriter.js'

const slides = [
    {text: 'Место для творчества и инноваций', image: 'img/slide1.svg'},
    {text: 'Сообщество, где реализуются идеи', image: 'img/slide2.svg'},
    {text: 'Комфортная зона для развития', image: 'img/slide3.svg'},
]

const slider = new Slider(slides).run(10)

const header = document.getElementById('header')
// header.classList.remove('move-up')
let windowScroll = scrollY

window.addEventListener('scroll', () => {
    // header.classList.add('move-up')
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

// const typeWriter = new TypeWriter('typewriter', 'Hello', 0.2)
// typeWriter.type()

// const typeWriter = (txtElement, words, wait = 3000) => {

// }

// export function scrollToView(id) {
//     console.log(id)
//     document.getElementById(id).scrollIntoView()
// }

// const xhr = new XMLHttpRequest()
// xhr.open('GET', '../img/slide1.svg', false)
// xhr.overrideMimeType('image/svg+xml')
// xhr.onload = function(e) {
//     document.getElementById('svgContainer')
//         .appendChild(xhr.responseXML.documentElement)
// }
// xhr.send('')

// const slider = document.getElementById('top-slider')
// const sliderText = slider.querySelector('.slider__text')
// const sliderImage = slider.querySelector('.slider__image')
// let currentSlide = 0

// function showSlide(id) {
//     sliderText.firstElementChild.textContent = slides[id].text
//     sliderImage.firstElementChild.src = slides[id].image
// }

// function showNextSlide() {
//     const oldSlide = currentSlide
//     currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1
//     if (currentSlide === oldSlide) return
//     showSlide(currentSlide)
// }

// showSlide(currentSlide)

// setInterval(() => {
//     showNextSlide()
// }, 5000)