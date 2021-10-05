import Slider from './components/slider.js'
import Toggler from './components/toggler.js'
import './utils/scrollHeader.js'

const slides = [
    {text: 'Место\nдля творчества\nи инноваций', image: 'img/slider/slide.svg'},
    {text: 'Сообщество,\nгде реализуются\nидеи', image: 'img/slider/slide.svg'},
    {text: 'Комфортная зона\nдля\nразвития', image: 'img/slider/slide.svg'},
]

const slider = new Slider(slides).run(10)

const togglerItems = [
    {
        title: 'Виртуальная реальность',
        text: 'Нравится заглядывать в будущее и визуализировать как технологии прочно вплетаются в нашу жизнь? Тогда Вам стоит попробовать себя в роли разработчика приложений виртуальной реальности. В Вашем распоряжени окажутся мощные станции, оснащенные всем необходимым, чтобы начать воплощать свои идеи в виртуальной реальности!',
        image: 'img/projects/oculus.png'
    }
]

const toggler = new Toggler(togglerItems)
toggler.showPage(0)

const join = document.getElementById('join')
join?.addEventListener('click', () => {
    window.open('https://discord.gg/WDXFxTay4K', '_blank')
})

const sliderJoin = document.getElementById('slider-join')
sliderJoin?.addEventListener('click', () => {
    window.open('https://discord.gg/WDXFxTay4K', '_blank')
})