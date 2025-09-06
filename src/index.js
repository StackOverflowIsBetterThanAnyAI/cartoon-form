const passwordInputElements = Array.from(
    document.querySelectorAll('input[type="password"]')
)

const frontElements = Array.from(document.querySelectorAll('.front'))

passwordInputElements.forEach((input) => {
    input.addEventListener('focus', () => {
        frontElements.forEach((el) => (el.style.visibility = 'hidden'))
    })

    input.addEventListener('blur', () => {
        frontElements.forEach((el) => (el.style.visibility = 'visible'))
    })
})
