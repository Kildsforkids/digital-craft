class Gallery {

    constructor(photos) {
        this.photos = photos
        this.gallery = document.getElementById('gallery')
        this.galleryContent = this.gallery.querySelector('.gallery__content')

        for (let photo of photos) {
            this.addPhoto(photo)
        }
    }

    addPhoto(photo) {
        const element = document.createElement('div')
        element.classList.add('gallery__item')
        const img = document.createElement('img')
        img.setAttribute('src', photo.src)
        img.setAttribute('alt', photo.text)
        element.appendChild(img)
        const overlay = document.createElement('div')
        overlay.classList.add('gallery__overlay')
        const overlayText = document.createElement('div')
        overlayText.classList.add('overlay__text')
        overlayText.textContent = photo.text
        overlay.appendChild(overlayText)
        element.appendChild(overlay)
        this.galleryContent.appendChild(element)
    }
}

export default Gallery