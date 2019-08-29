$(document).ready(function() {



setInterval(function(){
  $('.section-top figure').css('top','120%');
  setTimeout(function(){$('.section-top figure').css('top','-120%')},4000);
},8000);


  $('.popup-with-form').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#text',

    callbacks: {
      beforeOpen: function() {
        if($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = '#text';
        }
      }
    }
  });

});

var sliderBottle = $('.slider-bottle > .container');

sliderBottle.slick({
  infinite: true,
  speed: 500,
  fade: true,
  dots: true,
  dotsClass: "my-dots",
  cssEase: 'ease-in-out'
});



var $status = $('.pagingInfo');
var sliderProcess = $('.slider-process > .container-img');

sliderProcess.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + '/' + slick.slideCount);
});

sliderProcess.slick({
    slide: 'img',
    autoplay: true,
    dots: true,
    fade: true,
    cssEase: 'ease-in-out'
});

var rellax = new Rellax('.rellax');