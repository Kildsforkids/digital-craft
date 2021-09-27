import Time from './time.js'

class TypeWriter {
    constructor (id, text = '', timeout = 1) {
        this.textElement = document.getElementById(id)
        this.timeout = Time.secondsToMilliseconds(timeout)
        this.fullText = text

        this.setText('')
    }

    setText(text) {
        this.fullText = text
        // this.textElement.innerText = text
        return this
    }

    setTimeout(seconds) {
        this.timeout = Time.secondsToMilliseconds(seconds)
        return this
    }

    type(start = 0) {
        // for (const letter of this.fullText) {
        //     this.wait(this.timeout).then(() => {
        //         this.typeLetter(letter)
        //     })
        // }
        if (this.text.length === this.fullText.length || start > this.fullText.length) return
        this.typeLetter(this.fullText[start++])
        setTimeout(() => this.type(start), this.timeout)
    }

    typeLetter(letter) {
        // this.setText(this.text + letter)
        this.text += letter
        this.textElement.innerText = this.text
    }

    wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }
}

export default TypeWriter