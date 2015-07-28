$(document).ready(function() {

    var init = function() {
        var controller = $.superscrollorama();

        controller.addTween('.work__section', TweenMax.from( $('.work__section'), .5, {css:{opacity: 0}}));
    }

    Pace.on('done', function() {
        init();
    });
});
