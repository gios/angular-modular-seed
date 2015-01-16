var gulp = require("gulp"),
    connect = require("gulp-connect"),
    open = require("gulp-open"),
    browserify = require("browserify"),
    source = require('vinyl-source-stream'),
    watch = require('gulp-watch'),
    uglify = require('gulp-uglify'),
    rename = require("gulp-rename");

gulp.task("connect", function () {
    connect.server({
        port: 3000
    });
});

gulp.task("open", function () {
    var options = {
        url: "http://localhost:3000",
        app: "google-chrome"
    };
    gulp.src("./index.html")
        .pipe(open("", options));
});

gulp.task("browserify", function () {
    return browserify("./app/app.module.js")
        .bundle()
        .pipe(source("interestShare.js"))
        .pipe(gulp.dest("./dist/"));
});

gulp.task("watch", function () {
    watch("./app/**/**/*.js");
    gulp.watch("./app/**/**/*.js", ["browserify", "compress"]);
});

gulp.task("compress", function () {
    gulp.src("./dist/interestShare.js")
        .pipe(uglify())
        .pipe(rename("interestShare.min.js"))
        .pipe(gulp.dest("./dist/"));
});

gulp.task("default", ["connect", "open", "browserify", "compress", "watch"]);
