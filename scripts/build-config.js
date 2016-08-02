({
    baseUrl: "modules",
    paths: {
        'Modernizr': '../vendors/modernizr',
        'requireLib': '../vendors/require'
    },
    shim: { 'Modernizr': { exports: 'Modernizr' } },
    name: "main",
    include: ["requireLib", "app", "download"],
    out: "build.js"
})