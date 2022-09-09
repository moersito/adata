'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var npmDist = require('gulp-npm-dist');

gulp.task('sass-css', function(){
  return gulp.src('assets/scss/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('assets/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('minify-css', function(){
  return gulp.src('assets/scss/style.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('assets/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// styles for general css
gulp.task('sass-general', function(){
  return gulp.src('assets/scss/style/*.scss')
    .pipe(sass())
    .pipe(rename({prefix: 'style.'}))
    .pipe(gulp.dest('assets/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: true
  })
});

gulp.task('serve', ['browserSync'], function() {
  gulp.watch(['assets/style/*.scss'],['sass-css']);
  gulp.watch('assets/scss/style/*.scss', ['minify-css']);
  gulp.watch(['assets/scss/_variables.scss'],['sass-css', 'sass-style']);
  gulp.watch('index.html', browserSync.reload);
  gulp.watch('*/*.html', browserSync.reload);
  gulp.watch('assets/js/*.js', browserSync.reload);
})

// Copy dependencies to lib/
gulp.task('npm-lib', function() {
  gulp.src(npmDist(), {base:'./node_modules/'})
    .pipe(rename(function(path) {
      path.dirname = path.dirname.replace(/\/dist/, '').replace(/\\dist/, '');
    }))
    .pipe(gulp.dest('lib'));
});
