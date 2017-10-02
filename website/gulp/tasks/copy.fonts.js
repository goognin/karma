'use strict';
// копирование файлов шрифтов из папки исходников в итоговую папку
module.exports = function() {
  $.gulp.task('copy:fonts', function() {
    return $.gulp.src('./src/fonts/**/*.*', { since: $.gulp.lastRun('copy:fonts') })
      .pipe($.gulp.dest($.config.root + '/assets/fonts'));
  });
};
