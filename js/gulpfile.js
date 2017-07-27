var gulp = require('gulp');
var concat = require('gulp-concat');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
gulp.task('concatInterface',function(){
  return gulp.src(['./js/*-interface.js'])
  //gulp.src it is used to pull all the files that used  in the browser and they are formatted in an array
  //* use the * to combine all the files that have interface instead of repeating
  .pipe(concat('allConcat.js'))
  //cancat() function is called from the top that we have required that creates a file into whic it would be stored
  .pipe(gulp.dest('./tmp/js'));
  //we tell the files where to be stored
});
gulp.task('jsBrowserify',['concatInterface'],function(){
  //['concatInterface'],would be done first before the other one
  //below shows the file that it wants to browserify
  return browserify({entries :['./tmp/allConcat.js']})
  //show the path of the file thats is to be browserified
  .bundle()
  .pipe(source('app.js'))
  //creates file called app.js
  .pipe(gulp.dest('./build/js'));
  //creates a folder to which the app.js will be keep thats is named *js*
});
