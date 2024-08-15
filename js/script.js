var burgerMenu = document.getElementById('burger-menu');
var overlay = document.getElementById('menu');
burgerMenu.addEventListener('click',function(){
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});


// let profileWidth = document.querySelectorAll(".profile-description")

// window.onload = function() {
//     for (let i = 0; i < profileWidth.length; i++) {
//         if (profileWidth[i].offsetWidth >= '180') {
//             profileWidth[i].style.width = "170px"
//             // profileWidth[i].style.marginRight = '0px'
//             // profileWidth[i].style.marginLeft = '10px'
//             profileWidth[i].children[1].style.fontSize = '15px'
//         } 
//         console.log(profileWidth[i].offsetWidth)

//     }
// }