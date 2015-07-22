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

            var triangles = [];

            for (i = 0; i <= nbColumns; i++) {
                var minX =  (window.innerWidth / nbColumns) * (i-1);
                var maxX = window.innerWidth / nbColumns * i;

                var minY =  heights[i] * window.innerHeight;
                var maxY = heights[i] * window.innerHeight + window.innerHeight * 0.1;

                var x = Math.floor(Math.random() * (maxX - minX) + minX);
                var y = Math.floor(Math.random() * (maxY - minY) + minY);

                var colorIndex = Math.floor(Math.random() * 3);
                var color = colors[colorIndex];

                var triangle = new Triangle(x, y, color, size, s, true);
                triangles.push(triangle);
            }
            console.log(triangles.length);
            for (i= 0; i < triangles.length; i++) {
                triangles[i].hide();
                triangles[i].showAnimated();
            }
        }
    }
})

.directive('titleSvg', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var s = Snap('#title-svg');
            var size = 15;
            var colors = ['#fead13', '#21a5ad', '#f5484a'];
            var angles = [0, 65, 60];
            var posX = [28, 46, 56];
            var posY = [-10, -27, -4];
            var i = 0;

            for (i = 0; i < 3; i++) {
                var x = posX[i];
                var y = posY[i];

                var color = colors[i];
                var angle = angles[i];

                var triangle = new Triangle(x, y, color, size, s, false);
                triangle.rotate(angle);
            }
        }
    }
});
