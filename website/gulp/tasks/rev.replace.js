module.exports = function() {
  // var manifest = $.gulp.src($.config.root + '/assets/manifest/rev-manifest.json');
  $.gulp.task('rev:replace', function() {
    return $.gulp.src($.config.root + '/index.html')
	    .pipe($.gp.revReplace({manifest: $.gulp.src($.config.root + '/assets/manifest/rev-manifest.json')}))
    	.pipe($.gulp.dest($.config.root));
  })
};