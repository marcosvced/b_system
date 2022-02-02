const gulp = require('gulp')
const gulpRename = require('gulp-rename')
const gulpSass = require('gulp-sass')(require('sass'))
const browserSync = require('browser-sync').create()
const { exec } = require('child_process')

const sass = () => gulp.src('./lib/scss/style.scss')
  .pipe(gulpSass({ outputStyle: 'expanded' }, null)
    .on('error', gulpSass.logError))
  .pipe(gulp.dest('./assets/css/'))
  .pipe(gulpSass({ outputStyle: 'compressed' }, null)
    .on('error while minifying', gulpSass.logError))
  .pipe(gulpRename('style.min.css'))
  .pipe(gulp.dest('./assets/css'))

exports.sass = sass

exports.default = () => {
  sass()
  gulp.watch('lib/scss/**/*.scss', sass)

  exec('node ./bin/www.js')

  browserSync.init({
    proxy: 'localhost:3000',
    port: 3001,
  })
  gulp.watch(['./**/*.ejs', 'lib/scss/**/*.scss', 'lib/js/**/*.js']).on('change', browserSync.reload)
}
