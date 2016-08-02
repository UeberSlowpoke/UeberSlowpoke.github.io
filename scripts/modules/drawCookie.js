define(function () {
    'use strict';

    return function ($, center) {
        $.beginPath();
        $.arc(center.x, center.y + 14, 12, -(Math.PI * 0.26), Math.PI * 1.26, false);
        $.stroke();
        $.fill();
        $.closePath();
    };
});