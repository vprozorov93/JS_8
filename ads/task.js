const rotators = Array.from(document.querySelectorAll('.rotator'))
const rotators_case = []

rotators.forEach((element) => {
    rotators_case.push(Array.from(element.querySelectorAll('.rotator__case')))
})

function getActiveAndNextCaseIndex(array) {
    let currenIndex 
    let nextIndex = 0
    array.forEach((element) => {
        if (element.classList.contains('rotator__case_active')) {
            currenIndex = array.indexOf(element, 0)
            if (currenIndex != array.length-1){
                nextIndex = currenIndex + 1
            }
        }
    })

    return {currenIndex, nextIndex}
}


setInterval(() => {
    
    rotators_case.forEach((element)=>{
      const indexes = getActiveAndNextCaseIndex(element)
      element[indexes.currenIndex].classList.remove('rotator__case_active')
      element[indexes.nextIndex].classList.add('rotator__case_active')
    })

},1000)