$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        margin:10,
        dots: false,
        autoplay: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:true
            }
        }
    })
  });

// -------------------------------------------------------------

let scroll = document.querySelector(".scroll-top");

window.onscroll = function() {
    if(this.scrollY > 1000) {
        scroll.classList.add("scroll");
    } else {
        scroll.classList.remove("scroll");
    }
}

scroll.onclick = ()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}