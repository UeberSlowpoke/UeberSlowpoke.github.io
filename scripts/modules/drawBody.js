define(function () {
    'use strict';

    return function ($) {

        function drawEar(x, y) {
            var height = 28,
                width = 25;
            $.moveTo(x, y);
            $.bezierCurveTo(x + width / 2 - 2, y - height, x + width / 2 + 2, y - height, x + width, y);
        }

        function drawPaws() {
            var height = 3, width = 3, x = 215, y = 167;

            for (var i = 0; i < 4; i++) {
                var dist = (i % 2) ? 60 : 35;
                $.lineTo(x, y + height);
                $.arc(x - width / 2, y + height, width / 2, 0, Math.PI);
                $.lineTo(x - width, y);

                if (i < 3) {
                    $.lineTo(x - dist, y);
                }

                x -= dist;
            }
        }

        $.beginPath();
        drawEar(60, 50);
        $.lineTo(105, 50);
        drawEar(105, 50);
        $.bezierCurveTo(160, 37, 200, 37, 224.6, 66);
        $.arc(158.4, 111, 80, -(Math.PI / 180 * 35), (Math.PI / 180 * 45));
        drawPaws();
        $.bezierCurveTo(50, 150, 40, 110, 60, 50);
        $.stroke();
        $.fill();
        $.closePath();
    };
});