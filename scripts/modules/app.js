define(['./colorPalettes', './drawBody', './drawTail', './drawPattern', './drawFace', './drawCookieHelper', './drawCookie', './drawChocolate'],
function(palettes, drawBody, drawTail, drawPattern, drawFace, drawCookieHelper, drawCookie, drawChocolate){
    'use strict';

    return {
        init: function(canvas, options) {
            this.canvas = canvas;
            this.$ = this.canvas.getContext('2d');
            this.options = options || {};
            this.headRadius = 46;
            this.faceCenter = {x: 95, y: 70}; // for correct whisker`s positioning
            this.cookieUrl = this.options.cookiePatternPath;
        },

        setup: function() {
            var palette = palettes.init();
            this.palette = (Math.random() < 0.5) ? palette.grey : palette.brown;

            this.bellyGradient = this.$.createLinearGradient(0, 0, 0, 210);
            this.bellyGradient.addColorStop(0.6, this.palette.basicColor);
            this.bellyGradient.addColorStop(0.6, this.palette.bellyColor);
            this.bellyGradient.addColorStop(1, this.palette.bellyColor);

            // initial parameters
            this.$.lineCap = 'round';
            this.$.strokeStyle = this.palette.strokeColor;
            this.$.fillStyle = this.palette.basicColor;
            this.$.lineWidth = 5;
        },

        clear: function() {
            this.$.clearRect(0, 0, this.canvas.width, this.canvas.height);
        },

        draw: function () {
            this.$.save();
            this.$.fillStyle = this.bellyGradient;
            drawBody(this.$);
            this.$.restore();

            drawTail(this.$);
            drawPattern.setParams(this.$, this.faceCenter);

            // belly
            this.$.save();
            this.$.fillStyle = this.palette.bellyColor;
            drawPattern.belly();
            this.$.restore();

            // head
            if (Math.randInt(0, 1)) {
                this.$.save();
                this.$.lineWidth = Math.rand(2, 4);
                drawPattern.head(this.$.lineWidth);
                this.$.restore();
            }

            // back
            if (Math.randInt(0, 1)) {
                this.$.save();
                this.$.fillStyle = this.palette.strokeColor;
                drawPattern.back();
                this.$.restore();
            }

            // tail
            if (Math.randInt(0, 1)) {
                this.$.save();
                this.$.lineCap = 'butt';
                this.$.lineWidth = 9;
                drawPattern.tail();
                this.$.restore();
            }

            // nose
            if (Math.randInt(0, 1)) {
                this.$.save();
                this.$.fillStyle = '#ffffff';
                drawPattern.nose();
                this.$.restore();
            }

            drawFace.setParams(this.$, this.faceCenter, this.headRadius);

            this.$.save();
            this.$.fillStyle = this.palette.strokeColor;
            drawFace.eyes();
            this.$.restore();

            this.$.save();
            this.$.lineWidth = Math.rand(1, 1.6);
            drawFace.whiskers();
            this.$.restore();

            var self = this,
                ctx = this.$;

            drawCookieHelper(this.$, this.cookieUrl, this.palette.cookieColor, function () {
                drawCookie(ctx, self.faceCenter);

                ctx.save();
                ctx.lineWidth = Math.rand(2.5, 3.5);
                ctx.strokeStyle = self.palette.chocolateColor;
                drawChocolate(ctx);
                ctx.restore();

                ctx.save();
                ctx.lineWidth = 3;
                drawFace.cheeks();
                ctx.restore();
            });
        }
    };
});