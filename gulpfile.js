var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');  
var rename = require('gulp-rename');  


var minifyCSS = require('gulp-minify-css');

/* Task when running `gulp` from terminal */
gulp.task('default', ['less', 'watch-less']);

gulp.task('less', function() {
gulp.src(['styles/less/master.less'])
        .pipe(less()).on('error', handleError)
        .pipe(gulp.dest('styles'))

    gulp.src(['styles/less/master.less'])
        .pipe(less()).on('error', handleError)
        .pipe(minifyCSS())
        .pipe(rename("master.min.css"))
        .pipe(gulp.dest('styles'))
})

/* Task to watch less changes */
gulp.task('watch-less', function() {  
  gulp.watch('./styles/less/*/*.less' , ['less']);
});



function handleError(e) {
    console.log("Error occured");

    console.log("Message: " + e.message);
}