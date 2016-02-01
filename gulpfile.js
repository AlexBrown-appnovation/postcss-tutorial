var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnext = require('cssnext');
var precss = require('precss');

gulp.task('css', function () {
  var processors = [
    autoprefixer,
    cssnext,
    precss
  ];
  return gulp.src('./src/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'));
});

gulp.task('default', function() {
  // place code for your default task here
});
