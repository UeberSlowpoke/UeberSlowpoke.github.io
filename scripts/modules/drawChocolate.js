define(function() {
    'use strict';

    return function ($) {
        for (var i = 0; i < 3; i++) {
            var x = Math.rand(88, 100);
            var y = Math.rand(82, 87);

            $.beginPath();
            $.moveTo(x, y);
            $.lineTo(x + Math.rand(1, 2), y + Math.rand(1, 2) * ((Math.rand() > 0.5) ? 1 : -1));
            $.stroke();
        }
    };
});