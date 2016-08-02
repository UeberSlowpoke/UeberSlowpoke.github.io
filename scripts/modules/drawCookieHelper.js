define(function () {
    'use strict';

    function draw($, url, color, cb) {

        if (typeof(Promise) === 'function' && url) {
            // use promise, cause image is loaded async and picture is blinking.
            // especially if color is used instead image pattern

            var getCookiePattern = new Promise(function (resolve, reject) {
                var img = new Image();
                img.onload = function () { resolve(img) };
                img.onerror = function () { reject() };
                img.src = url;
            });

            getCookiePattern
                .then(function (img) {
                    return $.createPattern(img, 'repeat');
                })
                .catch(function () { return color })
                .then(function (fillStyle) {
                    // use self-defined function for prevent new promises
                    // when data has been already received

                    draw = function () {
                        $.save();
                        $.fillStyle = fillStyle;
                        cb();
                        $.restore();
                    };
                    draw();
                });
        } else {
            draw = function () {
                $.save();
                $.fillStyle = color;
                cb();
                $.restore();
            };
            draw();
        }
    }

    return draw;
});