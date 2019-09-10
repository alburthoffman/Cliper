var gulp = require('gulp');

var clean = require('gulp-clean');

var paths = {
    pages: ['src/**']
};

gulp.task('clean', function () {
    return gulp.src('dist/', {read: false})
        .pipe(clean());
});

gulp.task('copy-files', function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', gulp.series(gulp.parallel('copy-files')));