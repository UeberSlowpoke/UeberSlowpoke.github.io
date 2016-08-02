define(function() {
    'use strict';

    var $, center;

    return {
        setParams: function(ctx, faceCenter) {
            $ = ctx;
            center = faceCenter;
        },

        head: function (width) {
            var count = Math.randInt(2, 3),
                pointStart = {x: 88, y: 50},
                dist = 18,
                height = 5,
                stripsPlace = (dist / count),
                offset = (stripsPlace - width) / 2;

            for (var i = 0; i < count; i++) {
                $.beginPath();
                $.save();
                $.translate(pointStart.x + stripsPlace * i + offset, pointStart.y);
                $.moveTo(0, 0);
                $.lineTo(0, height);
                $.restore();
                $.stroke();
                $.closePath();
            }
        },

        back: function () {
            var x = 170, y = 41, h = 30, w = 18;

            $.beginPath();
            $.moveTo(x, y);
            $.bezierCurveTo(x + (w / 2 - 10), y + h, x + (w / 2 + 3), y + h, x + w + 2, y + 2);
            $.fill();

            x += w * 1.8;
            y += 7;

            $.beginPath();
            $.moveTo(x, y);
            $.bezierCurveTo(x + (w / 2 - 12), y + h, x + (w / 2 + 1), y + h, x + w, y + 12);
            $.fill();

        },

        tail: function () {
            var h = 14,
                fromCords = [[244, 103], [250, 98], [252, 85]],
                toCords = [[244, 105 + h], [252 + h, 98 + h - 5], [254 + h + 2, 85]];

            fromCords.forEach(function (el, index) {
                $.beginPath();
                $.moveTo(el[0], el[1]);
                $.lineTo(toCords[index][0], toCords[index][1]);
                $.stroke();
            });
        },

        nose: function () {
            $.beginPath();
            $.arc(center.x, center.y + 4, 12, 0, Math.PI * 2);
            $.fill();
            $.closePath();
        },

        belly: function () {
            $.beginPath();
            $.moveTo(50, 127);
            $.bezierCurveTo(60, 127, 63, 120, 68, 115);
            $.bezierCurveTo(84, 100, 100, 100, 120, 114);
            $.bezierCurveTo(119, 113, 126, 120, 140, 127);
            $.fill();
            $.closePath();
        }
    };
});