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
});

gulp.task('livereload', function() {
    gulp.src('build/**')
        .pipe(connect.reload());

    if (!browserYetOpen) {
        open('http://localhost:8080');
        browserYetOpen = true;
    }
});

gulp.task('css', function() {
    return gulp.src('src/css/*.scss')
        .pipe(sourcemaps.init())
        .pipe(compass({ sass: 'scss' }))
        .pipe(concat('app.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/css'));
});

gulp.task('templates', function() {
    return gulp.src(['src/templates/**/*.html'])
        .pipe(gulp.dest('build/templates'));
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
    gulp.watch('src/css/*.scss', ['css']);

    //watches handlebars files for changes
    gulp.watch('src/templates/**/*.html', ['templates']);

    //watches JavaScript files for changes
    gulp.watch('src/js/**/*.js', ['scripts']);
});

gulp.task('build', ['templates', 'scripts']);
gulp.task('server', ['build', 'watch', 'connect'], function () {
    watch(['build/**'], batch(function (events, done) {
        gulp.start('livereload', done);
    }))
});