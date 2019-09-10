var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
var paths = {
    pages: ['src/components/ui/*.html', 'src/components/ui/*.png']
};

gulp.task('copy-html', function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest('dist/ui'));
});

gulp.task('default', gulp.series(gulp.parallel('copy-html'), function () {
    return tsProject.src()
        .pipe(tsProject())
        .js
        .pipe(gulp.dest('dist'));
}));