/*global require */
var gulp = require("gulp"),
    connect = require("gulp-connect"),
    open = require("gulp-open"),
    browserify = require("browserify"),
    source = require('vinyl-source-stream'),
    watch = require('gulp-watch'),
    uglify = require('gulp-uglify'),
    rename = require("gulp-rename");

gulp.task("connect", function () {
    "use strict";
    connect.server({
        port: 3000
    });
});

gulp.task("open", function () {
    "use strict";
    var options = {
        url: "http://localhost:3000",
        app: "chrome"
    };
    gulp.src("./index.html")
        .pipe(open("", options));
});

gulp.task("browserify", function () {
    "use strict";
    return browserify("./app/app.module.js")
        .bundle()
        .pipe(source("interestShare.js"))
        .pipe(gulp.dest("./dist/"));
});

gulp.task("watch", function () {
    "use strict";
    watch("./app/**/**/*.js");
    watch("./assets/**/**/*.js");
    gulp.watch("./app/**/**/*.js", ["browserify", "compress"]);
    gulp.watch("./assets/**/**/*.js", ["browserify", "compress"]);
});

gulp.task("compress", function () {
    "use strict";
    gulp.src("./dist/interestShare.js")
        .pipe(uglify())
        .pipe(rename("interestShare.min.js"))
        .pipe(gulp.dest("./dist/"));
});

gulp.task("default", ["connect", "open", "browserify", "compress", "watch"]);
