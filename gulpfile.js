const gulp = require('gulp')
const gulpRename = require('gulp-rename')
const gulpSass = require('gulp-sass')(require('sass'))
const gulpUglify = require('gulp-uglify')

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

const uglify = () => gulp.src('./lib/js/*.js')
  .pipe(gulpUglify())
  .on('error', () => 'Uglify JS failed')
  .pipe(gulpRename('bsystem.min.js'))
  .pipe(gulp.dest('./assets/js/'))

exports.sass = sass
exports.uglify = uglify

exports.default = () => {
  sass()
  gulp.watch('lib/scss/**/*.scss', sass)

  uglify()
  gulp.watch('lib/js/*.js', uglify)
  gulp.watch('lib/js/**/*.js', uglify)

  exec('node ./bin/www.js')

  browserSync.init({
    proxy: 'localhost:3000',
    port: 3001,
  })
  gulp.watch(['./**/*.ejs', 'lib/scss/**/*.scss', 'lib/js/**/*.js']).on('change', browserSync.reload)
}
