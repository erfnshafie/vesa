
// toggleDropdown (e) => {
//     const _d = $(e.target).closest('.dropdown'),
//       _m = $('.dropdown-menu', _d);
//     setTimeout(function(){
//       const shouldOpen = e.type !== 'click' && _d.is(':hover');
//       _m.toggleClass('show', shouldOpen);
//       _d.toggleClass('show', shouldOpen);
//       $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
//     }, e.type === 'mouseleave' ? 300 : 0);
//   }
  
//   $('body')
//     .on('mouseenter mouseleave','.dropdown',toggleDropdown)
//     .on('click', '.dropdown-menu a', toggleDropdown);






// part222222222222222222222222222222
const activeImage = document.querySelector(".product-image .active");
const productImages = document.querySelectorAll(".image-list img");
const navItem = document.querySelector('a.toggle-nav');

function changeImage(e) {
  activeImage.src = e.target.src;
}

function toggleNavigation(){
  this.nextElementSibling.classList.toggle('active');
}

productImages.forEach(image => image.addEventListener("click", changeImage));
//  navItem.addEventListener('click', toggleNavigation);










let popupBtns =document.querySelectorAll("button.popup-btn")
if(popupBtns){
   var  popupwrapper=document.createElement("div")
  popupwrapper.className = "popup-wrapper"
    document.body.prepend(popupwrapper)
}
    popupBtns.forEach(popupBtn => {
popupBtn.addEventListener("click" , e => {
  let popup = popupBtn.nextElementSibling
  popup.classList.add("didan")
  popupwrapper.classList.add("didan")

  let popupcloses = document.querySelectorAll(".popup-close")
  popupcloses.forEach(popupclose =>{
         popupclose.addEventListener("click" , e => {
         popup.classList.remove("didan")
         popupwrapper.classList.remove("didan")
         
         })
      })
          popupwrapper.addEventListener('click' , e =>{
          popup.classList.remove("didan")
          popupwrapper.classList.remove("didan")
      } )
  })

})







// part 33333333333333333333333




// start part 8888888888888888888888888

let scroll = document.querySelector("button.scroll")
window.addEventListener("scroll" , e => {
  if(window.scrollY > 300 & window.scrollY<2300){
    scroll.classList.add("view")
  }else{
    scroll.classList.remove("view")
  }
})
    scroll.addEventListener("click" , e => {
       if (scroll.classList.contains("view")) {   
  window.scrollTo({top: 0 ,behavior :"smooth"} )
       }
})

let scroll2 = document.querySelector("button.scroll2")
window.addEventListener("scroll" , e =>{
if(window.scrollY > 2300){
scroll2.classList.add("view")
}else{
scroll2.classList.remove("view")
}
})
scroll2.addEventListener("click" , e =>{
      
   document.querySelector("#art"). scrollIntoView({top: 0 ,behavior :"smooth"} )

})






// end part 888888888888888888888



