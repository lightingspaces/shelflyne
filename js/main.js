document.addEventListener('DOMContentLoaded', function() {

  // preload spinner
  window.addEventListener('load', function() {
    setTimeout(function() {
      document.getElementById('preloader').classList.add('fadeOut');
      setTimeout(function() {
        document.getElementById('preloader').style.display = 'none';
      }, 600);
    }, 2000);
  });

  // expand or shrink active section
  var mainLinks = document.querySelectorAll('#main > a');
  mainLinks.forEach(function(link) {
    link.addEventListener('mouseover', function() {
      link.classList.add('active');
      mainLinks.forEach(function(otherLink) {
        if (otherLink !== link) {
          otherLink.classList.add('shrink');
        }
      });
    });

    link.addEventListener('mouseout', function() {
      link.classList.remove('active');
      mainLinks.forEach(function(otherLink) {
        otherLink.classList.remove('shrink');
      });
    });
  });

  // play video on hover
  function addVideoHoverEvents(linkId, videoId) {
    document.getElementById(linkId).addEventListener('mouseover', function() {
      document.getElementById(videoId).play();
    });

    document.getElementById(linkId).addEventListener('mouseleave', function() {
      var video = document.getElementById(videoId);
      video.pause();
      video.currentTime = 0;
    });
  }

  addVideoHoverEvents('link-01', 'video-01');
  addVideoHoverEvents('link-02', 'video-02');

});