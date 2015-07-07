var gulp   = require('gulp'),
compass    = require('gulp-compass'),
watch      = require('gulp-watch'),
batch      = require('gulp-batch'),
handlebars = require('gulp-ember-handlebars'),
uglify     = require('gulp-uglify'),
connect    = require('gulp-connect'),
concat     = require('gulp-concat'),
sourcemaps = require('gulp-sourcemaps'),

open       = require('open');

var browserYetOpen = false;

gulp.task('connect', function() {
    connect.server({
        root: 'build',
        livereload: true
    });

    if (!browserYetOpen) {
        open('http://localhost:8080');
        browserYetOpen = true;
    }
});

gulp.task('livereload', function() {
    gulp.src('build/**')
        .pipe(connect.reload());
});

gulp.task('index', function() {
    return gulp.src(['src/index.html'])
        .pipe(gulp.dest('build/'));
});

gulp.task('templates', function() {
    return gulp.src(['src/templates/**/*.html'])
        .pipe(gulp.dest('build/templates'));
});

gulp.task('css', function() {
    return gulp.src('src/css/*.css')
        // .pipe(sourcemaps.init())
        // .pipe(compass({ sass: 'scss' }))
        .pipe(concat('app.css'))
        // .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/css'));
});

gulp.task('scripts', function() {
    var scriptSrc = [
        'src/js/angular.min.js',
        'src/js/angular-route.min.js',
        'src/controllers.js',
        'src/app.js',
    ];

    return gulp.src(scriptSrc)
        .pipe(sourcemaps.init())
        .pipe(concat('app.min.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/js'));
});

gulp.task('watch', function() {
    //watches SCSS files for changes
    gulp.watch('src/css/*.css', ['css']);

    //watches index file for changes
    gulp.watch('src/index.html', ['index']);

    //watches templates files for changes
    gulp.watch('src/templates/**/*.html', ['templates']);

    //watches JavaScript files for changes
    gulp.watch('src/js/**/*.js', ['scripts']);
});

gulp.task('build', ['index', 'templates', 'css', 'scripts']);
gulp.task('server', ['build', 'watch', 'connect'], function () {
    watch(['build/**'], batch(function (events, done) {
        gulp.start('livereload', done);
    }))
});
