define(['Modernizr'],
function (Modernizr) {
    'use strict';

    var doc = document;

    if (Modernizr.adownload) {
        var downloadLink = doc.querySelector('.button_download');

        return function (canvas) {
            downloadLink.addEventListener('click', function () {
                downloadLink.href = canvas.toDataURL();
                downloadLink.download = 'pusheen ' + Math.randInt(1, 10000) + '.png';
            });
        };

    } else {
        var downloadWrapper = doc.querySelector('.download-wrapper'),
            downloadHint = doc.querySelector('.download-hint');

        return function () {
            downloadWrapper.classList.add('download-wrapper_hidden');
            downloadHint.classList.add('download-hint_active');
        };
    }
});