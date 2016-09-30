var appRoot = 'src/';
var outputRoot = 'dist/';
var exportSrvRoot = 'export/';

module.exports = {
    root: appRoot,
    source: appRoot + '**/*.js',
    html: appRoot + '**/*.html',
    css: appRoot + '**/*.css',
    png: appRoot + '**/*.png',
    style: 'styles/**/*.css',   
    eot: appRoot + '**/*.eot',
    ttf: appRoot + '**/*.ttf',
    woff: appRoot + '**/*.woff',
    woff2: appRoot + '**/*.woff2',
    output: outputRoot,
    exportSrv: exportSrvRoot,
    doc: './doc',
    e2eSpecsSrc: 'test/e2e/src/**/*.js',
    e2eSpecsDist: 'test/e2e/dist/'
};
