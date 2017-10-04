//cоздание прайтов из png исходников

'use strict';

module.exports = function () {
  $.gulp.task('sprite:png', function () {
    var spriteData = $.gulp.src('./src/sprite/*.png').pipe($.gp.spritesmith({
      imgName: 'sprite.png', // итоговый спрайт
      cssName: 'sprite.scss', // файл стилей
      algorithm: 'left-right',
      padding: 20
    }));
    var imgStream = spriteData.img
      .pipe($.gulp.dest($.config.root + '/assets/img')); // путь куда записываем спрайт

    var cssStream = spriteData.css
      .pipe($.gulp.dest($.config.root + '/assets/img/css')); // путь куда записываем файл стилей для спрайта

    return $.merge(imgStream, cssStream);
  })

}