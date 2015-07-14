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
    return gulp.src('src/css/*.scss')
        // .pipe(sourcemaps.init())
        .pipe(compass({
            sass: 'src/css',
            require: ['susy']
        }))
        .pipe(concat('app.css'))
        // .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/css'));
});

gulp.task('scripts', function() {
    var scriptSrc = [
        'src/js/vendor/angular.min.js',
        'src/js/vendor/angular-route.min.js',
        'src/js/vendor/snap.svg-min.js',
        'src/js/Triangle.js',
        'src/js/directives.js',
        'src/js/controllers.js',
        'src/js/app.js',
    ];

    return gulp.src(scriptSrc)
        .pipe(sourcemaps.init())
        .pipe(concat('app.min.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/js'));
});

var fontsSrc = [
    'src/fonts/**/*.eot',
    'src/fonts/**/*.svg',
    'src/fonts/**/*.ttf',
    'src/fonts/**/*.woff',
    'src/fonts/**/*.woff2'
];
gulp.task('fonts', function() {
    return gulp.src(fontsSrc)
        .pipe(gulp.dest('build/fonts'));
});


gulp.task('watch', function() {
    gulp.watch('src/css/*.scss', ['css']);
    gulp.watch('src/index.html', ['index']);
    gulp.watch('src/templates/**/*.html', ['templates']);
    gulp.watch('src/**/*.js', ['scripts']);
    gulp.watch(fontsSrc, ['fonts']);
});

gulp.task('build', ['index', 'templates', 'css', 'scripts', 'fonts']);
gulp.task('server', ['build', 'watch', 'connect'], function () {
    watch(['build/**'], batch(function (events, done) {
        gulp.start('livereload', done);
    }))
});
