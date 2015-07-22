var Triangle = (function() {
    'use strict';

    function Triangle(x, y, color, size, s, home) {
        this.x = x;
        this.y = y;
        this.s = s;

        this.size = size;
        this.size2 = size / 2;
        this.height = Math.sqrt(this.size * this.size - this.size2 * this.size2);

        this.color = color;

        this.createTriangle(home);
    }

    Triangle.prototype.createTriangle = function(home) {
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
        this.triangle = filledTriangle;

        if (home) {
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
    }

    Triangle.prototype.hide = function() {
        this.triangle.transform('t-300,-300');
        this.unfilled.transform('t-300,-300');
    }

    Triangle.prototype.showAnimated = function() {
        this.triangle.animate({
            transform: 't0,0'
        }, 1000, mina.easeOut);
        this.unfilled.animate({
            transform: 't0,0'
        }, 1000, mina.easeOut);
    }

    Triangle.prototype.hoverAnimation = function() {
        var self = this;

        var matrix = new Snap.Matrix();
        matrix.scale(1.2);

        this.triangle.hover(function() {
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

    Triangle.prototype.rotate = function(angle) {
        this.triangle.transform('r'+angle);
    }

    return Triangle;
}());
