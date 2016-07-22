var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');

// compiles the main SCSS file and drops it into the dist/css directory
gulp.task('sass', function(){
  return gulp.src('src/sass/tomb-ui.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('dist/css'))
});

// watches the SCSS files and then recompiles changes
gulp.task('watch', function() {
	gulp.watch('src/sass/**/*.scss', ['sass']);
	gulp.watch('src/sass/tomb-ui.scss', ['sass']);
});