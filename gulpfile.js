var gulp = require('gulp');
var sass = require('gulp-sass');
var path = 'assets/scss/**/*.scss';
gulp.task('sass', function () {
  gulp.src(path)
    .pipe(sass())
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('watch', function() {
  gulp.watch(path, ['sass']);
});

gulp.task('default', ['sass', 'watch']);


