var build_width_media_query = function(min, max){
  var media = "(min-width: " + min + "px)";
  if(max !== null) media += " and (max-width: " + max + "px)";
  return media;
};

var match_width_media_query = function(min, max){
  return window.matchMedia(build_width_media_query(min, max)).matches;
};


// image change data-src
var preload_image = function(src){
  $("").attr("src", src).hide().appendTo("body").on("load", function(){
    $(this).remove();
  });
};
$(function(){
  var BREAK_POINT = 768;

  var $w = $(window);
  var $h = $("html");
  var $b = $("body");


  var responsive_images = $("[data-src-sp]");

  responsive_images.each(function(){
    var img = $(this);
    img.data("src", img.attr("src"));
    preload_image(img.data("src-sp"));
  });


  (function(){

    $w.on("resize", function(){
      var scrollbar_width = window.innerWidth - document.body.clientWidth;
      var mode = $b.width() <= BREAK_POINT - scrollbar_width ? "sp" : "pc";

      responsive_images.each(function(){
        switch(mode){
         case "pc":
          $(this).attr("src", $(this).data("src"));
          break;
         case "sp":
          $(this).attr("src", $(this).data("src-sp"));
          break;
        }
      });

    });
  })();
  $w.resize();
});

var responsive = (function(){
  var sets = [];

  $(window).on("resize.responsive", function(){
    $.each(sets, function(i, set){
      var widthQuery = window.matchMedia(set.media);

      if(widthQuery.matches){
        set.fn(!set.prevMatch);
      }
      set.prevMatch = widthQuery.matches;
    });
  });

  return function(min, max, fn){
    sets.push({
      media: build_width_media_query(min, max),
      fn: fn,
      prevMatch: false
    });
  };
})();

//font-size rem change
jQuery(function($){
  var $w = $(window);
  var $h = $("html");
  var $b = $("body");

  var rem = function(n){
    return n * $w.width() / 6.4;
  };

  (function(){
    responsive(0, 767, function(changed){
      $h.css("font-size", rem(1));
      if(!changed) return;
    });

    responsive(768, null, function(changed){
      $h.css("font-size","");
      if(!changed) return;
    });
      
  })();

  $w.resize();
});


// page_top
var start = $('.page_top');
  
start.click(function() {
  $('html, body').stop().animate({scrollTop:0}, '1000');
});
