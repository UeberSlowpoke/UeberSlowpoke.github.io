define(function() {
    'use strict';

    var $, center, radius;

    return {
        setParams: function(ctx, faceCenter, headRadius) {
            $ = ctx;
            center = faceCenter;
            radius = headRadius;
        },

        eyes: function () {
            var eyesSize = Math.rand(3, 4.5);

            $.beginPath();
            $.arc(center.x - 23, center.y, eyesSize, 0, Math.PI * 2);
            $.arc(center.x + 23, center.y, eyesSize, 0, Math.PI * 2);
            $.fill();
            $.closePath();
        },

        whiskers: function () {
            var len = radius / Math.rand(1.5, 3),
                count = Math.randInt(2, 3),
                pointLStart = {x: center.x - radius + 5, y: center.y},
                pointRStart = {x: center.x + radius - 5, y: center.y},
                offset = 4;

            for (var i = 0; i < count; i++) {
                var angle = i < count / 2 ? 1.8 : -1.8;

                // left side
                $.beginPath();
                $.moveTo(pointLStart.x, pointLStart.y + offset);
                $.lineTo(pointLStart.x - len, pointLStart.y + offset + angle);
                $.stroke();
                $.closePath();

                // right side
                $.beginPath();
                $.moveTo(pointRStart.x, pointRStart.y + offset);
                $.lineTo(pointRStart.x + len, pointRStart.y + offset + angle);
                $.stroke();
                $.closePath();

                offset -= 3;
            }
        },

        cheeks: function () {
            $.beginPath();
            $.moveTo(center.x, center.y);
            $.bezierCurveTo(96, 77, 102, 77, 103, 70);
            $.moveTo(center.x, center.y);
            $.moveTo(center.x, center.y);
            $.bezierCurveTo(94, 77, 86, 77, 87, 70);
            $.stroke();
            $.closePath();
        }
    };
});