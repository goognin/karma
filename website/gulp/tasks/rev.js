module.exports = function() {
  $.gulp.task('rev', function() {
    return $.gulp.src(['./dist/assets/css/*.css', './dist/assets/js/*.js'])
	    .pipe($.gp.revAll.revision())	   
	    .pipe($.gulp.dest($.config.root + '/assets'))
	    .pipe($.gp.revAll.manifestFile())
    	.pipe($.gulp.dest($.config.root + '/assets/manifest'))
  })
};