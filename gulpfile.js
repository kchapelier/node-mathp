"use strict";

var gulp = require('gulp'),
    concat = require('gulp-concat-util'),
    fs = require('fs'),
    jscs = require('gulp-jscs'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    mocha = require('gulp-mocha');

var files = ['./index.js', './lib/*.js', './properties/*.js', './functions/*.js', './gulpfile.js'];

gulp.task('lint', function () {
    return gulp
        .src(files)
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter(stylish));
});

gulp.task('codestyle', function () {
    return gulp
        .src(files)
        .pipe(jscs());
});

gulp.task('test', function () {
    return gulp
        .src(['./test/*.js'])
        .pipe(mocha({
            reporter: 'spec'
        }));
});

gulp.task('build', function () {
    gulp.src(['./lib/*.js', './index.js'])
        .pipe(concat('mathp-generic-build.js', {
            process: function (src) {
                return src
                    // Remove the 'Object elements retrieval' block from index.js
                    .replace(/\/[\r\n]*\* Object elements retrieval \*\/[^]+\/\* Object elements retrieval end \*\/[\r\n]*/g, '')
                    // Remove all "use strict";
                    .replace(/[\r\n]*.*"use strict";?.*[\r\n]*/g, '\n')
                    // Remove all module.exports
                    .replace(/[\r\n]*.*module.exports.*[\r\n]*/g, '\n')
                    // Add an indent level at the beginning of every lines
                    .replace(/(^|\r*\n)/g, '\n    ')
                    // Remove orphan tabs
                    .replace(/\n\t(\n|$)/g, '\n\n');
            }
        }))
        .pipe(concat.header(fs.readFileSync('build/template/header')))
        .pipe(concat.footer(fs.readFileSync('build/template/footer')))
        .pipe(gulp.dest('build'));
});
