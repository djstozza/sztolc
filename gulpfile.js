const gulp = require('gulp');
const watch = require('gulp-watch');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const browserSync = require('browser-sync');
const uglifyjs = require('uglify-es');
const composer = require('gulp-uglify/composer');
const pump = require('pump');
const rename = require('gulp-rename');
const nodemon = require('gulp-nodemon');
const reload = browserSync.reload;
const minify = composer(uglifyjs, console);

gulp.task('styles:above', function () {
  return gulp.src('source/scss/above.scss')
    .pipe(sassGlob())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./public/stylesheets/'))
    .pipe(browserSync.stream())
    .pipe(rename('above_fold_css.css'))
    .pipe(gulp.dest('./views/components/'))
});

gulp.task('styles', function () {
  return gulp.src('source/scss/style.scss')
    .pipe(sassGlob())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./public/stylesheets/'))
    .pipe(browserSync.stream())
});

gulp.task('js', function (cb) {
  var options = {};

  pump([
      gulp.src('source/js/custom.js'),
      minify(options),
      gulp.dest('./public/javascripts/')
    ],
    cb
  );
});

gulp.task('nodemon', function (cb) {
  return nodemon({
    script: 'app.js',
    watch: ['app.js'],
  }).once('start', cb);
});

gulp.task('browsersync', gulp.series('nodemon'), function () {
  browserSync({
    port: 3001,
    serveStatic: ['./public'],
    proxy: {
      target: 'http://localhost:3001'
    },
    reloadDelay: 500,
    notify: true,
    open: true,
    logLevel: 'silent'
  });

  gulp.watch(['source/scss/above.scss'], ['styles:above']);
  gulp.watch(['source/scss/style.scss'], ['styles']);
  gulp.watch(['source/scss/custom.js'], ['js']);
});

gulp.task('default', gulp.series(gulp.parallel('styles:above', 'styles', 'browsersync', 'js')));
