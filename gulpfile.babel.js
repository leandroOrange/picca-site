'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';
import autoprefixer from 'gulp-autoprefixer';
import plumber from 'gulp-plumber';
import waits from 'gulp-wait';
import concat from 'gulp-concat';
import babel from 'gulp-babel';
import browserSync from 'browser-sync';
browserSync.create();


gulp.task('default', ['css', 'javascript', 'scripts-vendors'], () => {

    browserSync.init({
      proxy: "http://localhost/orange/piccadely-web/site/dist/"
    });

    gulp.watch("./src/js/**/*.js", ['javascript']).on('change', browserSync.reload);
    gulp.watch("./src/sass/**/*.sass", ['css']);
    gulp.watch("./dist/templates/**/*.php").on('change', browserSync.reload);
    gulp.watch("./dist/*.php").on('change', browserSync.reload);

});


gulp.task('javascript', () => {
  return gulp.src('./src/js/**/*.js')
  .pipe(waits(800))
  .pipe(babel())
  .pipe(plumber())
  .pipe(uglify())
  .pipe(gulp.dest('./dist/assets/js'));
});


gulp.task('scripts-vendors', () => {
  return gulp.src([
    './src/js/vendors/jquery-1.12.0.min.js',
    './src/js/vendors/modernizr-2.8.3.min.js',
    './src/js/vendors/popper.min.js',
    './src/js/vendors/bootstrap.min.js'
  ])
    .pipe(concat('vendors.js'))
    .pipe(gulp.dest('./dist/assets/js/vendors'));
});


gulp.task('css', () => {
  gulp.src('./src/sass/**/*.sass')
    .pipe(waits(800))
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass(
      {outputStyle: 'compressed'})
    )
    .pipe(autoprefixer({
        browsers: ['last 10 versions'],
        cascade: false
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/assets/css'))
    .pipe(browserSync.stream());
});
