const fontSizeButton = Array.from(document.querySelectorAll('.font-size'))

function changeFontSize(event) {
    const fontButton = event.currentTarget
    const book = event.currentTarget.closest('.book')
    let fontSizeActive = document.querySelector('.font-size_active')
    
    fontSizeActive.classList.remove('font-size_active')
    fontButton.classList.add('font-size_active')
   
    if (fontButton.classList.contains('font-size_small') || fontButton.classList.contains('font-size_big')){
        book.className = 'book'
        book.classList.add(fontButton.classList[1])
    } else {
        book.className = 'book'
    }

    event.preventDefault()
}

fontSizeButton.forEach((element) => {
    element.addEventListener('click', changeFontSize)
})