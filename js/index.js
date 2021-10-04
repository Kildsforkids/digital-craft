import Slider from './components/slider.js'
import './utils/scrollHeader.js'

const slides = [
    {text: 'Место\nдля творчества\nи инноваций', image: 'img/slider/slide.svg'},
    {text: 'Сообщество,\nгде реализуются\nидеи', image: 'img/slider/slide.svg'},
    {text: 'Комфортная зона\nдля\nразвития', image: 'img/slider/slide.svg'},
]

const slider = new Slider(slides).run(10)

const join = document.getElementById('join')
join?.addEventListener('click', () => {
    window.open('https://discord.gg/8Rfn2SyK64', '_blank')
})

// const slider_join = document.getElementById('slider-join')
// slider_join.addEventListener('click', () => {
//     window.open('https://discord.gg/8Rfn2SyK64', '_blank')
// })