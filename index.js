const button=document.querySelector("button")
const close=document.querySelector(".popup-close")
const popup=document.querySelector(".popup-wrapper")
button.addEventListener('click',()=>{
popup.style.display='block'
})
close.addEventListener('click',()=>{
    popup.style.display='none'
})
popup.addEventListener('click',()=>{
    popup.style.display='none'
})