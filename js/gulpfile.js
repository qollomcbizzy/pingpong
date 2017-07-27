var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
gulp.task('jsBrowserify',function(){
  //below shows the file that it wants to browserify
  return browserify({entries :['../js/pingPong-interface.js']})
  //show the path of the file thats is to be browserified
  .bundle()
  .pipe(source('app.js'))
  //creates file called app.js
  .pipe(gulp.dest('./build/js'));
  //creates a folder to which the app.js will be keep thats is named *js*
});
