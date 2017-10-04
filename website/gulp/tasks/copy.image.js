'use strict';
// копирование файлов картинок из папки исходников в итоговую папку
module.exports = function() {
  $.gulp.task('copy:image', function() {
    return $.gulp.src('./src/images/**/*.*', { since: $.gulp.lastRun('copy:image') })
      .pipe($.gulp.dest($.config.root + '/assets/img'));
  });
};
