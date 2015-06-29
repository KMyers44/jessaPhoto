

jQuery(document).ready(function ($) {
    //Define an array of slideshow transition code
    var _SlideshowTransitions = [
      { $Duration: 1200, $Opacity: 2 }
    ];
    var options = {
      $AutoPlay: true,
      $SlideshowOptions: {
        $Class: $JssorSlideshowRunner$,
        $Transitions: _SlideshowTransitions,
        $TransitionsOrder: 1,
        $ShowLink: true
      },
      $FillMode: 2,
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$,
        $ChanceToShow: 2
      }
    };

    var jssor_slider1 = new $JssorSlider$('slider1_container', options);

    //responsive code begin
    function ScaleSlider() {
        var parentWidth = $('#slider1_container').parent().width();
        if (parentWidth) {
            jssor_slider1.$ScaleWidth(parentWidth);
        }
        else
            window.setTimeout(ScaleSlider, 30);
    }
    //Scale slider after document ready
    ScaleSlider();

    //Scale slider while window load/resize/orientationchange.
    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    //responsive code end

});





// page transitions
  // var main = $('.main');

  // main.css('display', 'none');

  // main.fadeIn(500);

  // $('a.transition').click(function(event){
  //     event.preventDefault();
  //     linkLocation = this.href;
  //     main.fadeOut(400, redirectPage);
  // });

  // function redirectPage() {
  //     window.location = linkLocation;
  // }

// });

// });
