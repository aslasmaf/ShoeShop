
//slideshow
var slideIndex = 1;
showSlides(slideIndex);

var timer = setInterval(autoslide, 5000);
function autoslide(){
  slideIndex += 1;
  showSlides(slideIndex);
}

function plusSlides(n) {
  slideIndex += n;
  showSlides(slideIndex);
  resetTimer()
;}

function currentSlide(n) {
  slideIndex = n
  showSlides(slideIndex);
  resetTimer();
}

function resetTimer(){
  clearInterval(timer);
  timer = setInterval(autoslide, 5000);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display= "block";
  slides[slideIndex-1].style.animation= "zoom-out 3s linear";

  dots[slideIndex-1].className += " active";
}
//end slideshow

//link border bottom animations

function dis_bor($bor_class){
  document.getElementById($bor_class).style.display = 'block';
}
function no_bor($bor_class){
  document.getElementById($bor_class).style.display = 'none';
}


//gsap animation
//const sticky = document.querySelector(".all");
const first_coll = document.querySelector(".ani-1");
const second_coll = document.querySelector(".second-coll");
const sec_2 = document.querySelector(".sec-2");
const trig = document.querySelector(".collection-items");
const trig_element = document.querySelector(".cat");
const ani_2 = document.querySelector(".ani-2");

var tl = new TimelineMax();
var tl2 = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl.from(first_coll, .5, {x:-100, opacity: 0,});
tl.from(second_coll, 1, {x:100, opacity: 0,});
tl2.from(sec_2, .5, {x:-100, opacity: 0,});
tl2.from(ani_2, 1, {x:100, opacity: 0,});

const scene = new ScrollMagic.Scene({
  triggerElement: trig_element,
})
.setTween(tl)
.addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: trig,
})
.setTween(tl2)
.addTo(controller);


//Display Search

$(document).ready(function(){
//lighter Slider
  $('#autoWidth').lightSlider({
    item:4,
    loop:false,
    slideMove:1,
    easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
    speed:600,
    responsive : [
        {
            breakpoint:800,
            settings: {
                item:3,
                slideMove:1,
                slideMargin:6,
              }
        },
        {
            breakpoint:480,
            settings: {
                item:2,
                slideMove:1
              }
        }
    ]
});  

//lighter Slider Men's & Women collection
$('#autoWidth-2').lightSlider({
  item:2,
  loop:false,
  slideMove:1,
  easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
  speed:600,
  responsive : [
      {
          breakpoint:800,
          settings: {
              item:3,
              slideMove:1,
              slideMargin:6,
            }
      },
      {
          breakpoint:480,
          settings: {
              item:2,
              slideMove:1
            }
      }
  ]
});  

$('#autoWidth-3').lightSlider({
  item:2,
  loop:false,
  slideMove:1,
  easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
  speed:600,
  responsive : [
      {
          breakpoint:800,
          settings: {
              item:3,
              slideMove:1,
              slideMargin:6,
            }
      },
      {
          breakpoint:480,
          settings: {
              item:2,
              slideMove:1
            }
      }
  ]
});

//Blog light slider
$('#blog-autoWidth').lightSlider({
  item:3,
  loop:false,
  slideMove:1,
  easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
  speed:600,
  responsive : [
      {
          breakpoint:800,
          settings: {
              item:2,
              slideMove:1,
              slideMargin:6,
            }
      },
      {
          breakpoint:480,
          settings: {
              item:1,
              slideMove:1
            }
      }
  ]
});  

//shops lighter slider
$('#shops-autoWidth').lightSlider({
  item:6,
  loop:false,
  slideMove:1,
  easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
  speed:600,
  responsive : [
      {
          breakpoint:800,
          settings: {
              item:3,
              slideMove:1,
              slideMargin:6,
            }
      },
      {
          breakpoint:480,
          settings: {
              item:2,
              slideMove:1
            }
      }
  ]
});  
  
// display search container
  $(".fa-search").click(function(){
    $(".search-container").slideDown("slow");
    $(".login-container").slideUp("slow");
    $(".register-container").slideUp("slow");
    $(".m-nav-list").css("display", "none");
  });
  $(".close-search-container").click(function(){
    $(".search-container").slideUp("slow");
  });
  $(".slideshow").click(function(){
    $(".search-container").slideUp("slow");
  });

// display login form
  $(".login-bto").click(function(){
    $(".login-container").slideDown("slow");
    $(".register-container").slideUp("slow");
    $(".search-container").slideUp("slow");
  });
  $(".close-login-form").click(function(){
    $(".login-container").slideUp("slow");
  });
  $(".slideshow").click(function(){
    $(".login-container").slideUp("slow");
  });

// display register form
  $(".register-bto").click(function(){
    $(".register-container").slideDown("slow");
    $(".login-container").slideUp("slow");
    $(".search-container").slideUp("slow");
  });
  $(".close-register-form").click(function(){
    $(".register-container").slideUp("slow");
  });
  $(".slideshow").click(function(){
    $(".register-container").slideUp("slow");
  });

  //Mobile view nav
  $(".fa-bars").click(function(){
    $(".m-nav-list").toggle("slow");
  });


});