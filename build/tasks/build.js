var gulp = require('gulp');
var runSequence = require('run-sequence');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var to5 = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var paths = require('../paths');
var compilerOptions = require('../babel-options');
var assign = Object.assign || require('object.assign');
var notify = require('gulp-notify');
var browserSync = require('browser-sync');
var htmlmin = require('gulp-htmlmin');

// transpiles changed es6 files to SystemJS format
// the plumber() call prevents 'pipe breaking' caused
// by errors from other gulp plugins
// https://www.npmjs.com/package/gulp-plumber
gulp.task('build-system', function() {
  return gulp.src(paths.source)
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(changed(paths.output, {extension: '.js'}))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(to5(assign({}, compilerOptions.system())))
    .pipe(sourcemaps.write('.', {includeContent: false, sourceRoot: '/src'}))
    .pipe(gulp.dest(paths.output));
});

// copies changed html files to the output directory
gulp.task('build-html', function() {
  return gulp.src(paths.html)
    .pipe(changed(paths.output, {extension: '.html'}))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(paths.output));
});

// copies changed css files to the output directory
gulp.task('build-css', function() {
  return gulp.src(paths.css)
    .pipe(changed(paths.output, {extension: '.css'}))
    .pipe(gulp.dest(paths.output))
    .pipe(browserSync.stream());
});

// copies changed png files to the output directory
gulp.task('build-png', function() {
  return gulp.src(paths.png)
    .pipe(changed(paths.output, {extension: '.png'}))
    .pipe(gulp.dest(paths.output))
    .pipe(browserSync.stream());
});
gulp.task('build-eot', function() {
  return gulp.src(paths.eot)
    .pipe(changed(paths.output, {extension: '.eot'}))
    .pipe(gulp.dest(paths.output))
    .pipe(browserSync.stream());
});
gulp.task('build-ttf', function() {
  return gulp.src(paths.ttf)
    .pipe(changed(paths.output, {extension: '.ttf'}))
    .pipe(gulp.dest(paths.output))
    .pipe(browserSync.stream());
});
gulp.task('build-woff', function() {
  return gulp.src(paths.woff)
    .pipe(changed(paths.output, {extension: '.woff'}))
    .pipe(gulp.dest(paths.output))
    .pipe(browserSync.stream());
});
gulp.task('build-woff2', function() {
  return gulp.src(paths.woff2)
    .pipe(changed(paths.output, {extension: '.woff2'}))
    .pipe(gulp.dest(paths.output))
    .pipe(browserSync.stream());
});


// this task calls the clean task (located
// in ./clean.js), then runs the build-system
// and build-html tasks in parallel
// https://www.npmjs.com/package/gulp-run-sequence
gulp.task('build', function(callback) {
  return runSequence(
    'clean',
    ['build-system', 'build-html', 'build-css','build-png', 'build-eot', 'build-ttf', 'build-woff','build-woff2'],
    callback
  );
});
