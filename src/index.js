const passwordInputElements = Array.from(
    document.querySelectorAll('input[type="password"]')
)

const backElement = document.getElementById('back')
const frontElements = Array.from(document.querySelectorAll('.front'))
const tailElement = document.getElementById('tail')

passwordInputElements.forEach((input) => {
    input.addEventListener('focus', () => {
        backElement.style.opacity = 1
        backElement.style.left = '0px'
        frontElements.forEach((el) => (el.style.opacity = 0))
        tailElement.style.opacity = 1
    })

    input.addEventListener('blur', () => {
        backElement.style.opacity = 0
        backElement.style.left = '-192px'
        frontElements.forEach((el) => (el.style.opacity = 1))
        tailElement.style.opacity = 0
    })
})

const focusableElements = Array.from(document.querySelectorAll('input'))

document.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return

    const firstElement = focusableElements[0]
    const lastElement = focusableElements.at(-1)

    const currentIndex = focusableElements.indexOf(document.activeElement)

    e.preventDefault()

    if (e.shiftKey) {
        if (document.activeElement === firstElement) {
            lastElement.focus()
        } else {
            focusableElements[currentIndex - 1].focus()
        }
    } else {
        if (document.activeElement === lastElement) {
            firstElement.focus()
        } else {
            focusableElements[currentIndex + 1].focus()
        }
    }
})
