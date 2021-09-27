import Slider from './slider.js'
// import TypeWriter from './typewriter.js'
import './scrollHeader.js'

const slides = [
    {text: 'Место для творчества и инноваций', image: 'img/slide1.svg'},
    {text: 'Сообщество, где реализуются идеи', image: 'img/slide2.svg'},
    {text: 'Комфортная зона для развития', image: 'img/slide3.svg'},
]

const slider = new Slider(slides).run(10)

const join = document.getElementById('join')
join.addEventListener('click', () => {
    window.open('https://discord.gg/8Rfn2SyK64', '_blank')
})

// const typeWriter = new TypeWriter('typewriter', 'Hello', 0.2)
// typeWriter.type()