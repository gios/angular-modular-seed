/*jshint node: true */

var gulp = require("gulp"),
    connect = require("gulp-connect"),
    open = require("gulp-open"),
    watch = require('gulp-watch'),
    uglify = require('gulp-uglify'),
    rename = require("gulp-rename"),
    shell = require('gulp-shell'),
    browserify = require("browserify"),
    source = require('vinyl-source-stream'),
    karma = require('karma').server,
    protractor = require("gulp-protractor").protractor;

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
    return browserify("./app/app.modules.js")
        .bundle()
        .pipe(source("myApp.js")) // Your name of application
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
    gulp.src("./dist/myApp.js") // Your name of application                   
        .pipe(uglify())
        .pipe(rename("myApp.min.js")) // Your name of application
        .pipe(gulp.dest("./dist/"));
});

gulp.task("webdriver", shell.task([
    "webdriver-manager update",
    "webdriver-manager start"
]));

gulp.task("test:unit", function (done) {
    "use strict";
    karma.start({
        configFile: __dirname + "/karma.conf.js",
        singleRun: true
    }, done);
});

gulp.task("test:e2e", function (done) {
    gulp.src(["./tests/e2e/*Spec.js"])
        .pipe(protractor({
            configFile: __dirname + "/protractor.conf.js",
            args: ["--baseUrl", "http://localhost:4444/wd/hub"]
        }))
        .on('error', function (e) {
            throw e;
        });
});

gulp.task("default", ["connect", "open", "browserify", "compress", "watch"]);