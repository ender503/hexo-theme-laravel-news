var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var errorHandler = function (err) {
    console.log(err.toString());
    this.emit('end');
  };

// 一次性编译 Sass
gulp.task('sass', function() {
    return gulp.src('./source/scss/*.scss')
        // .pipe(sass({outputStyle: 'compressed', includePaths: scssIncludePaths}))
        .pipe(sass())
        .on('error', errorHandler)
        .pipe(autoprefixer())
        .pipe(gulp.dest('./source/css'));
});




// 实时编译
gulp.task('default', ['sass'], function() {
    gulp.watch('./source/scss/_partial/**/*.scss', ['sass']);
    gulp.watch('./source/scss/*.scss', ['sass']);
});
