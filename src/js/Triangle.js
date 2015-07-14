var Triangle = (function() {
    'use strict';

    function Triangle(x, y, color, size, s) {
        this.x = x;
        this.y = y;
        this.s = s;

        this.size = size;
        this.size2 = size / 2;
        this.height = Math.sqrt(this.size * this.size - this.size2 * this.size2);

        this.color = color;

        this.init();
    }

    Triangle.prototype.init = function() {
        this.createTriangles();
    }

    Triangle.prototype.createTriangles = function() {
        var filledTriangle = this.s.paper.polygon([
            this.x - this.size2, this.y + this.height,
            this.x + this.size2, this.y + this.height,
            this.x, this.y, this.x - this.size2,
            this.y + this.height
        ]);
        filledTriangle.attr({
            fill: this.color,
            stroke: this.color,
            strokeWidth: 2
        });
        this.filled = filledTriangle;

        var unfilledTriangle = this.s.paper.polygon([
            this.x - this.size2, this.y + this.height,
            this.x + this.size2, this.y + this.height,
            this.x, this.y, this.x - this.size2,
            this.y + this.height
        ]);
        unfilledTriangle.attr({
            fill: 'none',
            stroke: this.color,
            strokeWidth: 2
        });
        this.unfilled = unfilledTriangle;

        this.hoverAnimation();
    }

    Triangle.prototype.hoverAnimation = function() {
        var self = this;

        var matrix = new Snap.Matrix();
        matrix.scale(1.2);

        this.filled.hover(function() {
            self.unfilled.animate({
                transform: 's2.0T0,-2',
                opacity: 0
            }, 300, mina.easeOut, function() {
                self.unfilled.transform('s1');
                self.unfilled.attr({
                    opacity: 1
                });
            });
        });
    }

    return Triangle;
}());