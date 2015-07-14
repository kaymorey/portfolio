angular.module('PortfolioDirectives', [])

.directive('homeSvg', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var s = Snap('#home-svg');
            var size = 30;
            var nbColumns = 10;

            var heights = [0.7, 0.8, 0.6, 0.5, 0.6, 0.7, 0.4, 0.1, 0.2, 0.3, 0.1];
            var colors = ['#f5484a', '#21a5ad', '#fead13'];
            var i = 0;

            for (i = 0; i <= nbColumns; i++) {
                var minX =  (window.innerWidth / nbColumns) * (i-1);
                var maxX = window.innerWidth / nbColumns * i;

                var minY =  heights[i] * window.innerHeight;
                var maxY = heights[i] * window.innerHeight + window.innerHeight * 0.1;

                var x = Math.floor(Math.random() * (maxX - minX) + minX);
                var y = Math.floor(Math.random() * (maxY - minY) + minY);

                var colorIndex = Math.floor(Math.random() * 3);
                var color = colors[colorIndex];

                var triangle = new Triangle(x, y, color, size, s);
            }
        }
    }
});