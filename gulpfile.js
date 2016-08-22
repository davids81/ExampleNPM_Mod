

var gulp = require('gulp');
var ts = require('gulp-typescript');
var mocha = require('gulp-mocha');


gulp.task('default', () => {
    var tsProject = ts.createProject('./tsconfig.json');
    var tsResult = tsProject
        .src(['./src/**/*.ts', './tests/**/*.ts'])
        .pipe(ts(tsProject));
    return tsResult.js.pipe(gulp.dest('./unittesttest3'));
});


gulp.task('rtb', function() {
    return gulp
        .src('./unittesttest3/tests/*.js')
        .pipe(mocha());
});
