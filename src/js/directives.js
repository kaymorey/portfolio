angular.module('PortfolioDirectives', [])

.directive('homeSvg', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var s = Snap('#home-svg');
            var size = 30;
            var nbTriangles = 20;

            var heights = [0.8, 0.72, 0.6, 0.88, 0.6, 0.78, 0.65, 0.33, 0.73, 0.19, 0.75, 0.45, 0.58, 0.12, 0.38, 0.21, 0.63, 0.32, 0.15, 0.08];
            var colors = ['#21a5ad', '#f5484a', '#fead13'];
            var i = 0;
            var topIndexes = [0, 1, 2, 4, 6, 7, 9, 13, 14];
            var bottomIndexes = [3, 5, 8, 10, 11, 12, 15, 16, 17, 18, 19];

            var triangles = [];

            for (i = 0; i < nbTriangles; i++) {
                var x =  window.innerWidth / nbTriangles * i + window.innerWidth / nbTriangles / 2;
                var y = heights[i] * window.innerHeight;

                var colorIndex = i % 3
                var color = colors[colorIndex];

                var triangle = new Triangle(x, y, color, size, s, true);
                triangles.push(triangle);
            }

            for (i= 0; i < triangles.length; i++) {
                if (topIndexes.indexOf(i) != -1) {
                    triangles[i].translate('top');
                }
                else {
                    triangles[i].translate('bottom');
                }
            }
            triangles = shuffle(triangles);
            for (i= 0; i < triangles.length; i++) {
                triangles[i].showAnimatedWithDelay(i*40);
            }

            function shuffle(o){
                for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
                    return o;
            }
        }
    }
})

.directive('titleSvg', function($timeout) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            $timeout(function() {
                var s = Snap('#'+attrs.id);
                var size = 15;
                var colors = ['#fead13', '#21a5ad', '#f5484a'];
                var angles = [0, 65, 60];
                var posX = [28, 46, 56];
                var posY = [-10, -27, -4];
                var i = 0;

                var triangles = [];

                for (i = 0; i < 3; i++) {
                    var x = posX[i];
                    var y = posY[i];

                    var color = colors[i];
                    var angle = angles[i];

                    var triangle = new Triangle(x, y, color, size, s, false);
                    triangle.rotate(angle);
                }
            });
        }
    }
});
