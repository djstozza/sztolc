const gulp = require('gulp');
const blok = require('gulp-blok');
const watch = require('gulp-watch');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const browserSync = require('browser-sync');
const webpack = require('webpack');
const gulpWebpack = require('gulp-webpack');
const rename = require('gulp-rename');
const nodemon = require('gulp-nodemon');
const reload = browserSync.reload

gulp.task('styles:above', function () {
  return gulp.src('source/scss/above.scss')
    .pipe(sassGlob())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./public/css/'))
    .pipe(browserSync.stream())
    .pipe(rename('above_fold_css.css'))
    .pipe(gulp.dest('./views/components/'))
})

gulp.task('styles', function () {
  return gulp.src('source/scss/style.scss')
    .pipe(sassGlob())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./public/stylesheets/'))
    .pipe(browserSync.stream())
})

// gulp.task('scripts', function () {
//   return gulp.src('source/js/custom.js')
//     .pipe(gulpWebpack({
//       output: {
//         filename: 'custom.js',
//       },
//       module: {
//         loaders: [{
//           test: /\.js$/,
//           loader: 'babel-loader'
//         }]
//       },
//       plugins: [
//         new webpack.optimize.UglifyJsPlugin({
//           compress: {
//             warnings: false,
//           },
//           output: {
//             comments: false,
//           }
//         })
//       ]
//     }, webpack))
//     .pipe(gulp.dest('public/js'))
//     .pipe(browserSync.stream())
// })

gulp.task('browsersync', ['nodemon'], function () {
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
  })

  gulp.watch(['source/scss/above.scss'], ['styles:above'])
  gulp.watch(['source/scss/style.scss'], ['styles'])
})

gulp.task('nodemon', function (cb) {
  return nodemon({
    script: 'app.js',
    watch: ['app.js'],
  }).once('start', cb)
})

gulp.task('default', ['styles:above', 'styles', 'browsersync'])
