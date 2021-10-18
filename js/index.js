import Slider from './components/slider.js'
import Toggler from './components/toggler.js'
import Gallery from './components/gallery.js'
import './utils/scrollHeader.js'

const slides = [
    {text: 'Место\nдля творчества\nи инноваций', image: 'img/slider/slide.svg'},
    {text: 'Сообщество,\nгде реализуются\nидеи', image: 'img/slider/slide.svg'},
    {text: 'Комфортная зона\nдля\nразвития', image: 'img/slider/slide.svg'},
]

const slider = new Slider(slides).run(10)

const togglerItems = [
    // {
    //     title: 'Виртуальная реальность',
    //     text: 'Нравится заглядывать в будущее и визуализировать как технологии прочно вплетаются в нашу жизнь? Тогда Вам стоит попробовать себя в роли разработчика приложений виртуальной реальности. В Вашем распоряжени окажутся мощные станции, оснащенные всем необходимым, чтобы начать воплощать свои идеи в виртуальной реальности!',
    //     image: 'img/projects/oculus.png'
    // },
    {
        title: 'Разработка приложений виртуальной и дополненной реальности',
        text: 'Нравится заглядывать в будущее и визуализировать как технологии прочно вплетаются в нашу жизнь? Тогда Вам стоит попробовать себя в роли разработчика приложений виртуальной реальности.\
        В нашей VR AR мастерской тебя ждут шлема HTC vive, Oculus quest, камеры Insta 360 Pro II, мощные графические станции для разработки и многое другое.\
        От тебя потребуется только прийти и захотеть делать, со всем остальным мы поможем. Приходи в аудиторию 1121 (1632) с понедельника по пятницу с 10:00 до 18:00, наши ребята тебе все подскажут и расскажут.',
        image: 'img/projects/oculus.png'
    },
    {
        title: '3D / 2D графика',
        text: 'Если ты уже давно хотел научиться творить магию на экране компьютера, то у нас есть что тебе предложить. У нас тебя ждет комфортное рабочее место, целая россыпь интересных задач и опытные коллеги, которые помогут тебе советом.\
        Возможно, тебе будет интересно рисовать персонажей, возможно ты захочешь смоделировать детального робота, или сделать анимацию торнадо, запрограммировать процедурно генерируемый город, создать цифровую скульптуру существа или ты просто хочешь попробовать себя в любом из имеющихся направлений компьютерной графики, приходи к нам с любой идеей!\
        Мы будем рады видеть тебя в аудитории 1121 (1632) с понедельника по пятницу с 10:00 до 18:00.',
        image: 'img/projects/oculus.png'
    },
    {
        title: 'Программирование и игровые движки',
        text: 'Нравится заглядывать в будущее и визуализировать как технологии прочно вплетаются в нашу жизнь? Тогда Вам стоит попробовать себя в роли разработчика приложений виртуальной реальности. В Вашем распоряжени окажутся мощные станции, оснащенные всем необходимым, чтобы начать воплощать свои идеи в виртуальной реальности!',
        image: 'img/projects/oculus.png'
    }
]

const toggler = new Toggler(togglerItems)
toggler.showPage(0)
setInterval(() => {
    toggler.showNext()
}, 10000)

const photos = [
    {src: 'img/gallery/gallery1.jpg', text: 'Виртуальная реальность'},
    {src: 'img/gallery/gallery2.jpg', text: 'Процесс работы'},
    {src: 'img/gallery/gallery3.jpg', text: 'Процесс работы'},
    {src: 'img/gallery/gallery4.jpg', text: 'Oculus Quest'},
    {src: 'img/gallery/gallery5.jpg', text: '3D принтер'},
    {src: 'img/gallery/gallery6.jpg', text: 'Робототехника'},
    {src: 'img/gallery/gallery7.png', text: 'Пайка'},
    {src: 'img/gallery/gallery8.jpg', text: 'InMoov'}
]

const gallery = new Gallery(photos)

const join = document.getElementById('join')
join?.addEventListener('click', () => {
    window.open('https://discord.gg/WDXFxTay4K', '_blank')
})

const sliderJoin = document.getElementById('slider-join')
sliderJoin?.addEventListener('click', () => {
    window.open('https://discord.gg/WDXFxTay4K', '_blank')
})