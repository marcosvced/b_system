const { series, src, dest, parallel } = require("gulp");
const watch = require("gulp-watch");
const maps = require("gulp-sourcemaps");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync");
const rename = require("gulp-rename");
sass.compiler = require("sass");
const server = browserSync.create();
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const babel = require("gulp-babel");

const paths = {
  scss: {
    src: ["lib/scss/style.scss"],
    watcher: ["lib/scss/**/*.scss"],
    dest: "assets/css/",
  },
  css: {
    src: ["assets/css/style.css"],
    dest: "assets/css/",
  },
  scripts: {
    src: ["lib/js/b_system.js"],
    watcher: ["lib/js/**/*.js"],
    dest: "assets/js/",
  }
};

// Gulp Pipe for compiling SASS main file
const compileSass = () => {
  return (
    src(paths.scss.src)
      .pipe(maps.init())
      .pipe(sass().on("Error compiling!", sass.logError))
      .pipe(maps.write("./"))
      .pipe(dest(paths.scss.dest))
      .pipe(server.stream())
  );
}

// Gulp Pipe for minifying CSS main file
const minCss = () => {
  return src(paths.css.src)
    .pipe(maps.init())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(maps.write("./"))
    .pipe(rename("style.min.css"))
    .pipe(dest(paths.css.dest));
}

const compileJs = () => {
  return src(paths.scripts.src)
    .pipe(babel({
      "presets": ["airbnb"]
    }))
    .pipe(rename("script.js"))
    .pipe(dest(paths.scripts.dest))
    .pipe(uglify())
    .pipe(rename("script.min.js"))
    .pipe(dest(paths.scripts.dest));
}

const watcher = () => {
  server.init({
    proxy: "http://localhost:3000",
  });
  watch(paths.scss.watcher).on(
    "change",
    series(compileSass, server.reload)
  );
  watch(paths.scripts.watcher).on("change", series(compileJs, server.reload));
  watch("./**/*.ejs").on("change", server.reload);
};

exports.compileSass = compileSass;
exports.minCss = minCss;
exports.compileJs = compileJs;
exports.bundle = series(compileSass, minCss, compileJs);
exports.watcher = watcher;
