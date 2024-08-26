 $(document).ready(function(){
      $('.product_item').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false ,
      autoplaySpeed: 2000,
      responsive: [{
                    breakpoint: 980,
                    settings:{
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                autoplay: false                         
                            }
                    },
                    {
                    breakpoint: 767,
                    settings:{
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                autoplay: false                         
                            }
                    }
                    ]
        });
});



var  nav = document.getElementById('nav');

window.onscroll = function(){

  if (window.pageYOffset >30) {

    nav.style.background = "#0d0d0d";
    nav.style.top        = "0";
    nav.style.opacity    = "80%";
  }
  else{
    nav.style.background = "transparent";
    nav.style.top        = "30px";
  }
}


function openNav() {
  document.getElementById("myNav").style.height    = "600px";
  document.getElementById("myNav").style.padding   = "80px 0px";
}
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
  document.getElementById("myNav").style.padding= "0";
}
















