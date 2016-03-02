var gulp = require('gulp');
var runSequence = require('run-sequence');
var taskListing = require('gulp-task-listing');

gulp.task('help', taskListing);

gulp.task('default',function(callback){
	// place for default task here
	console.log('default task');
    runSequence('help',
        callback
    );
	
});
gulp.task('oink',function(){
	console.log('\noink no, mañana ...\n');
});
gulp.task('oink2',function(){
	console.log('\noink2\n');
} );
