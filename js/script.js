

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







///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

    //for menu experiment






    /*$('#menu2').slicknav({
      label: '',
      duration: 1000,
      easingOpen: "easeOutBounce", //available with jQuery UI
      prependTo:'#demo2'
    });
*/

  // Dropdown Menu
/*var dropdown = document.querySelectorAll('.dropdown');
var dropdownArray = Array.prototype.slice.call(dropdown,0);
dropdownArray.forEach(function(el){
  var button = el.querySelector('a[data-toggle="dropdown"]'),
      menu = el.querySelector('.dropdown-menu'),
      arrow = button.querySelector('i.icon-arrow');

  button.onclick = function(event) {
    if(!menu.hasClass('show')) {
      menu.classList.add('show');
      menu.classList.remove('hide');
      arrow.classList.add('open');
      arrow.classList.remove('close');
      event.preventDefault();
    }
    else {
      menu.classList.remove('show');
      menu.classList.add('hide');
      arrow.classList.remove('open');
      arrow.classList.add('close');
      event.preventDefault();
    }
  };
})

Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};
*/
});








