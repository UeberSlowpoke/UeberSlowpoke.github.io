define(function () {
    'use strict';

    function getHSL (h, s, l) {
        return 'hsl(' + h + ',' + s + '%,' + l + '%)';
    }

    function getLightness (abs, interval) {
        // check for being in the range up to 0.1
        // for draw clear white(black) body(belly)
        // because we don`t involve this values in randomInterval
        // for preventing too light (too dark) cat`s
        return (Math.random() <= 0.1) ? abs : Math.randInt(interval[0], interval[1]);
    }

    return {
        // return method instead simple object
        // for updating palettes when new pusheen.setup() run

        init: function () {
            return {
                // strokeColor should be lighter (darker) than basicColor
                // for preventing merge of eyes`s and cheeks with body

                // lightness in basicColor >=30 because we don`t want too dark
                brown: {
                    strokeColor: getHSL(Math.randInt(28, 32), 100, 20),
                    basicColor: getHSL(Math.randInt(28, 32), 100, getLightness(100, [30, 85])),
                    bellyColor: getHSL(Math.randInt(28, 32), 100, getLightness(100, [40, 80])),
                    cookieColor: '#e09850',
                    chocolateColor: '#3a2008'
                },
                grey: {
                    strokeColor: getHSL(0, 0, 20),
                    basicColor: getHSL(0, 0, getLightness(0, [30, 100])),
                    bellyColor: getHSL(0, 0, getLightness(0, [30, 100])),
                    cookieColor: '#e09850',
                    chocolateColor: '#3a2008'
                }
            };
        }
    }
});