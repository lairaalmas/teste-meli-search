const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

const prefix = require("gulp-autoprefixer");
const minify = require("gulp-clean-css");
const rename = require("gulp-rename");

// .scss -> .min.css
gulp.task("sass", function () {
  return gulp
    .src("./src/styles/scss/*.scss")
    .pipe(sass())
    .pipe(prefix())
    .pipe(minify())
    .pipe(
      rename({
        extname: ".min.css",
      })
    )
    .pipe(gulp.dest("./src/styles/css"));
});

// watch scss files
gulp.task(
  "watch",
  gulp.series("sass", function () {
    gulp.watch("src/styles/scss/*.scss", gulp.series("sass"));
  })
);

gulp.task("start", gulp.series("watch"));
