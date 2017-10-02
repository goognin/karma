'use strict';

module.exports = function() {
  $.gulp.task('js:process', function() {
    return $.gulp.src($.path.app)
      .pipe($.gp.sourcemaps.init())      
      .pipe($.gp.concat('app.min.js'))
      .pipe($.gp.uglify()).on('error', $.gp.notify.onError({ title: 'JavaScript' }))
      .pipe($.gp.uglify())
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.root + '/assets/js'))
  })
};
