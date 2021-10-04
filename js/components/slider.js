class Slider {

    constructor(slides) {
        this.slides = slides
        this.slider = document.getElementById('top-slider')
        this.sliderText = this.slider.querySelector('.slider__text')
        this.sliderImage = this.slider.querySelector('.slider__image')
        this.currentSlide = 0
    }

    showSlide(id) {
        this.sliderText.textContent = this.slides[id].text
        this.sliderImage.data = this.slides[id].image
        this.slider.classList.remove('fade-in')
        this.slider.classList.add('fade-out')
    }

    showNextSlide() {
        const oldSlide = this.currentSlide
        this.currentSlide = (this.currentSlide === this.slides.length - 1) ? 0 : this.currentSlide + 1
        if (this.currentSlide === oldSlide) return
        this.slider.classList.remove('fade-out')
        this.slider.classList.add('fade-in')
        setTimeout(() => {
            this.showSlide(this.currentSlide)
        }, 1000)
    }

    run(time = 1) {
        this.showSlide(this.currentSlide)
        setInterval(() => {
            this.showNextSlide()
        }, time * 1000)
        return this
    }
}

export default Slider