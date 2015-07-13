var Triangle = (function() {
    'use strict';

    function Triangle(x, y, size) {
        this.x = x;
        this.y = y;

        this.size = size;
        this.size2 = size / 2;
        this.height = Math.sqrt(size*size - size2*size2);

        this.init();
    }

    Triangle.prototype.init = function() {
        this.createTriangles();
    }

    Triangle.prototype.createTriangles = function() {
        var triangle = s.paper.polygon([this.x-this.size2,this.y+this.height, this.x+this.size2,this.y+this.height, this.x,this.y, this.x-this.size2,this.y+this.height]);
        triangle.attr({
            fill: '#f5484a',
        });
        this.filled = triangle;

        triangle.attr({
            fill: 'none',
            stroke: '#f5484a',
            strokeWidth: 2
        });
        this.unfilled = triangle;
    }
});