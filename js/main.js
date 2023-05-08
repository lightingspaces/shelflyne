$(function() {

  // preload spinner

  $(window).on('load', function(){
    $("#preloader").delay(2000).fadeOut("slow");
  });

  // parallax.js
  // https://github.com/wagerfield/parallax

  // JavaScript
  
  var parallaxScenes = [];
  var sceneElements = [
    document.getElementById('scene-01'),
    document.getElementById('scene-02')
    ]
    for(i=0; i<sceneElements.length; i++){
      parallaxScenes[i] = new Parallax(sceneElements[i], {
        hoverOnly: true
      });
  }

  // classes for expanding sections

  $('#main > a').hover(function(){
    $(this).addClass('active');
    $('#main > a:not(.active)').addClass('shrink');
  }, function() {
      $(this).removeClass('active');
      $('#main > a').removeClass('shrink');
  });

  // play video on hover

  document.getElementById("link-01").addEventListener("mouseover", function() {
    document.getElementById("video-01").play();
  });
  
  document.getElementById("link-01").addEventListener("mouseleave", function() {
    document.getElementById("video-01").pause();
  });

  document.getElementById("link-02").addEventListener("mouseover", function() {
    document.getElementById("video-02").play();
  });
  
  document.getElementById("link-02").addEventListener("mouseleave", function() {
    document.getElementById("video-02").pause();
  });

});


(function($) {
  "use strict"; // Start of use strict

  $(window).on('load', function(){
    $("#preloader").delay(2000).fadeOut("slow");
  });


})(jQuery); // End of use strict