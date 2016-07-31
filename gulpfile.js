var gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefix = require('gulp-autoprefixer'),
  jshint = require('gulp-jshint'),
  stylish = require('jshint-stylish'),
  concat = require('gulp-concat');

gulp.task('bootstrap', function () {
  return gulp.src('./bower_components/bootstrap-sass/assets/stylesheets/**/*')
    .pipe(gulp.dest('./assets/scss'));
});

gulp.task('css', function () {
  return gulp.src('./bower_components/prism/themes/prism.css')
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('styles', function () {
  gulp.src('./assets/scss/app.scss')
    .pipe(sass({  style: 'compressed'  }))
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./assets/css'))
});

gulp.task('scripts', function () {
  return gulp.src([
    './bower_components/jquery/dist/jquery.js',
    './bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
    './bower_components/prism/prism.js',
    './assets/js/addCodeStyle.js'
    ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./assets/js'))
});

gulp.task('jshint', function () {
  return gulp.src('./assets/js/*')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
});


gulp.task('fonts', function () {
  return gulp.src('./bower_components/bootstrap-sass/assets/fonts/**/*')
    .pipe(gulp.dest('./assets/fonts'));
});

gulp.task('default', ['bootstrap', 'css', 'styles', 'scripts'], function () {
  gulp.watch('./assets/scss/**/*.scss', ['bootstrap', 'css', 'styles']);
  gulp.watch('./assets/js/**/*.js', ['scripts', 'jshint']);
});
