angular.module('PortfolioDirectives', [])

.directive('homeSvg', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var s = Snap('#home-svg');
            var triangle;
            var i = 0;
            var n = 500;
            var n2 = n / 2;
            var x = 0;
            var y = 0;
            for (i = 0; i < 10; i++) {
                x = Math.floor(Math.random() * window.innerWidth);
                y = Math.floor(Math.random() * window.innerHeight);
                // x = Math.random() * n - n2;
                // y = Math.random() * n - n2;
                triangle = s.paper.polygon([x-20,y+20, x+20,y+20, x,y, x-20,y+20]);
                triangle.attr({
                    fill: '#f5484a',
                });
            }
        }
    }
});