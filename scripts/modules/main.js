require.config({
    baseUrl: "./scripts/modules",
    paths: { 'Modernizr': '../vendors/modernizr' },
    shim: { 'Modernizr': { exports: 'Modernizr' } }
});

require(['./common'], function () {

    require(['./app', './download'],
    function (app, download) {
        var doc = document,
            canvas = doc.getElementById('pusheen'),
            generateButton = doc.querySelector('.button_generate');

        canvas.width = 280;
        canvas.height = 210;

        var pusheen = app;
        pusheen.init(canvas, {cookiePatternPath: 'cookie.png'});
        pusheen.setup();
        pusheen.draw();

        generateButton.addEventListener('click', function() {
            pusheen.clear();
            pusheen.setup();
            pusheen.draw();
        });

        download(canvas);
    });
});

// todo: add glasses, other pattern, other eyes, blush
// todo: find js memory leaks (?)