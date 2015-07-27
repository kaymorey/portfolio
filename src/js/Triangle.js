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

        this.angle = 0;

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

    Triangle.prototype.translate = function(position) {
        var transform = 't0,-600';
        if (position == 'bottom') {
            transform = 't0,600';
        }
        this.triangle.transform(transform);
        this.unfilled.transform(transform);
    }

    Triangle.prototype.showAnimatedWithDelay = function(delay) {
        var self = this;

        setTimeout(function() {
            self.triangle.animate({
                transform: 't0,0'
            }, 800, mina.easeOut);
            self.unfilled.animate({
                transform: 't0,0'
            }, 700, mina.easeOut);
        }, delay + 800);
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
        this.angle = angle;
        this.triangle.transform('r'+angle);
    }

    Triangle.prototype.hideForTitles = function() {
        this.triangle.transform('r'+this.angle+'t0,20');
        this.triangle.attr({
            opacity: 0
        });
    }

    Triangle.prototype.showForTitles = function(delay) {
        var self = this;
        this.triangle.animate({
            transform: 'r'+self.angle+'t0,0',
            opacity: 1
        }, 300, mina.easeOut);
    }

    return Triangle;
}());
