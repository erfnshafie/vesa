let bigImg =document.querySelector(".bigImg")
let images =document.querySelectorAll(".img")
images.forEach(img  =>{
    img.addEventListener("click" ,() =>{
        showpic(img.src)
    })

})
function showpic(value){
    bigImg.src=value
}