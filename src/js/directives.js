angular.module('PortfolioDirectives', [])

.directive('homeSvg', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var s = Snap('#home-svg');
            var triangle;
            var size = 30;
            var size2 = size / 2;
            var height = Math.sqrt(size*size - size2*size2);
            var xRange = 100;
            var nbColumns = 10;

            var heights = [0.7, 0.8, 0.6, 0.5, 0.6, 0.7, 0.4, 0.1, 0.2, 0.3];
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
                console.log(colorIndex);
                triangle = s.paper.polygon([x-size2,y+height, x+size2,y+height, x,y, x-size2,y+height]);
                triangle.attr({
                    fill: colors[colorIndex],
                });
            }
        }
    }
});