$(document).ready(function() {

    var init = function() {
        var controller = $.superscrollorama();

        $('.work__section').each(function(index) {
            controller.addTween('.work__section--'+index, TweenMax.from( $('.work__section--'+index), .5, {css:{opacity: 0}, ease:Quad.easeOut}));
            controller.addTween('.work__section--'+index, TweenMax.from( $('.work__section--'+index), .5, {css:{top: '30px'}, ease: Quad.easeOut}));
        });
    }

    $(window).on('hashchange', function() {
        init();
    });

    Pace.on('done', function() {
        init();
    });
});
