var gulp = require('gulp')
var concat = require('gulp-concat')
var sourcemaps = require('gulp-sourcemaps')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')
var coffee = require('gulp-coffee');

gulp.task('compileCoffee', function () {
  gulp.src(['ui/**/*.coffee'])
      .pipe(coffee())
      .pipe(gulp.dest('ui'))
});

gulp.task('watch', function () {
  gulp.watch('ui/**/*.coffee', ['compileCoffee']);
});

gulp.task('js', function () {
  gulp.src(['ui/*.js'])
      .pipe(concat('app.min.js'))
      .pipe(ngAnnotate())
      .pipe(gulp.dest('ui'))
});

gulp.task('default', ['compileCoffee']);
//gulp.task('default', ['compileCoffee', 'js', 'watch']);
