define(function() {
    'use strict';

    return function($) {
        $.beginPath();
        $.moveTo(240.5, 105);
        $.bezierCurveTo(250, 107, 255, 95, 253, 85);
        $.arc(261, 85, 8, Math.PI, Math.PI * 2);
        $.bezierCurveTo(270, 103, 263, 120, 240.5, 118);
        $.stroke();
        $.closePath();
        $.fill();
    };
});