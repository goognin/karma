'use strict';

module.exports = function() {
  $.gulp.task('sass_build', function() {
    return $.gulp.src('./src/style/main.scss')  
      .pipe($.gp.sass()).on('error', $.gp.notify.onError({ title: 'Style' }))
      .pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))   
      .pipe($.gp.csso())
      .pipe($.gulp.dest($.config.root + '/assets/css'))
      .pipe($.browserSync.stream());
  })
};
