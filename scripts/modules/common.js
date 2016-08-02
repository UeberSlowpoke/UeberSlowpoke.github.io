define(function () {
    'use strict';

    Math.rand = function (min, max) {
        return Math.random() * (max - min + 1) + min;
    };

    Math.randInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
});