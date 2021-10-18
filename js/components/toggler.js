class Toggler {

    constructor(items) {
        this.items = items
        this.page = document.getElementById('projects')
        this.pageTitle = this.page.querySelector('.project__title')
        this.pageDescription = this.page.querySelector('.project__description')
        this.pageImage = this.page.querySelector('.project__preview')
        this.pagination = this.page.querySelector('.projects__pages')
        this.toggles = []
        this.currentId = 0

        if (items.length > 1) {
            for (let page in items) {
                this.addToggle()
            }
        }
    }

    showPage(id) {
        const page = this.items[id]
        this.pageTitle.textContent = page.title
        this.pageDescription.textContent = page.text
        this.pageImage.src = page.image
        this.setToggleActive(id)
    }

    showNext() {
        if (++this.currentId > (this.toggles.length - 1)) {
            this.currentId = 0
        }
        this.showPage(this.currentId)
    }

    onToggle(page) {

    }

    addToggle() {
        const element = document.createElement('div')
        element.classList.add('projects__page')
        this.pagination.appendChild(element)
        this.toggles.push(element)
    }

    setToggleActive(id) {
        this.toggles = this.toggles.map((t, index) => {
            if (index === id) {
                t.classList.add('active')
            } else {
                t.classList.remove('active')
            }
            return t
        })
        this.currentId = id
    }
}

export default Toggler