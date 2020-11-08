const spans = document.querySelectorAll('h1 span')
spans.forEach(span => sapn.addEventListener('mouseover', function(e){
    span.classList.add('animated','rubberBand')
}))



const spans = document.querySelectorAll('h1 span')
spans.forEach(span => sapn.addEventListener('mouseout', function(e){
    span.classList.remove('animated','rubberBand')
}))

const htmlBar = document.querySelector('.bar-html')
const cssBar = document.querySelector('.bar-css')
const jsBar = document.querySelector('.bar-javascript')
const reactBar = document.querySelector('.bar-react')


var t1 = TimeLineLite()


t1.fromTo(htmlBar,75,{ width:`calc(0% - 6px)`},{ width:`calc(90% - 6px)`,ease: Power4.easeout})
.fromTo(cssBar,75,{ width:`calc(0% - 6px)`},{ width:`calc(95% - 6px)`,ease: Power4.easeout})
.fromTo(jsBar,75,{ width:`calc(0% - 6px)`},{ width:`calc(75% - 6px)`,ease: Power4.easeout})
.fromTo(reactBar,75,{ width:`calc(0% - 6px)`},{ width:`calc(70% - 6px)`,ease: Power4.easeout})


const contoller = new ScrollMagic.contoller()
const scene = new ScrollMagic.scene({
    triggerHook:0
})

.setTween(t1)
.addTo(Controller)


const showRequiredCategory = event =>{
    const links = document.querySelectorAll('.work-category button')
    
    for(i=0; i<links.length; i++){
        if(links[i].hasAttribute('class')){
            links[i].classList.remove('active')
        }
    }


    event.classList.add('active')
    const getCategory = document.querySelector(`.category-${getId}`)
    const Categories = document.querySelectorAll(`.div[class ^="category-"]`)

    for(i=0; i<categories.length; i++){
        if(categories[i].hasAttribute('class')){
            categories[i].classList.remove('showCategory')
            categories[i].classList.add('hideCategory')
        }
    }

    getCategory.classList.remove('hideCategory')
    getCategory.classList.add('showCategory')

}