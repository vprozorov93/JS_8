const reval = Array.from(document.querySelectorAll('.reveal'))
function isVisible(element){
    const {top, bottom} = element.getBoundingClientRect()
    if (bottom < 0) {
        return false
    }

    if (top > window.innerHeight) {
        return false
    }

    return true
}

setInterval(()=>{
    reval.forEach((element)=>{
        if (isVisible(element)) {
            element.classList.add('reveal_active')
        } else {
            if (element.classList.contains('reveal_active')) {
                element.classList.remove('reveal_active')
            }
        }
    })
}, 10)
