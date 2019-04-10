// Your code goes here


const slideHeader = document.querySelector(".content-section h2")
slideHeader.addEventListener('mouseover', (event)=>{
 event.target.style.color = 'red'
})

const titleSlide = document.querySelector(".logo-heading")
titleSlide.addEventListener("click",(event)=>{
    event.target.classList.toggle("come-right")
})

const lightsOut = document.querySelector("body")
lightsOut.addEventListener("keydown",(event) =>{
    event.target.style.backgroundColor = 'black'
})

const lightsOn = document.querySelector("body")
lightsOn.addEventListener("keyup",(event) =>{
    event.target.style.backgroundColor = "white"
})

const photoSpin = document.querySelector(".spin")
photoSpin.addEventListener("click", (event) =>{
event.target.classList.toggle("spinPhoto")
})

const textRed = document.querySelector("body")
textRed.addEventListener("keypress", (event)=>{
    event.target.style.color = "red"
})

losePictures = document.querySelector("header img")
losePictures.addEventListener("mouseout", (event)=>{
    event.target.style.display = "none"
})

const shrinkPicture = document.querySelector(".img-content img")
shrinkPicture.addEventListener("drag", (event)=>{
    event.target.style.width = "50%"
})

const growPicture = document.querySelector(".img-content img")
growPicture.addEventListener("dragend", (event)=>{
    event.target.style.width = "100%"
})

const buttonGrow = document.querySelector(".content-pick .btn")
console.log(buttonGrow)
buttonGrow.addEventListener("mouseup", (event)=>{
    event.target.classList.toggle("change")
})

const theftProtection = document.querySelector("body")
theftProtection.addEventListener("copy", (event)=>{
    event.target.style.fontSize = "30px"
})


const rotateHeaders = document.querySelector("body")

rotateHeaders.addEventListener("keypress", (event)=>{
    if(event.keyCode === 100 ){
        event.target.style.color = "blue"
    }
})
const changeGreen = document.querySelector("nav .nav-link")
changeGreen.addEventListener("click", (event)=>{
    event.target.style.color = "green"
})
const changeNav = document.querySelector("nav")
changeNav.addEventListener("click", (event)=>{
    event.target.style.color = "pink"
})


const letsGo = document.querySelector(".prop")

letsGo.addEventListener("click", (event)=>{
    event.stopPropagation()
    event.target.style.border = "2px solid black"
    
})

const div = document.querySelector(".text-content")

div.addEventListener("click", (event)=>{
    event.target.style.border = "2px solid black"
})

const form1 = document.querySelector("form")


form1.event.addEventListener("submit",(event)=>{
    event.preventDefault()
})