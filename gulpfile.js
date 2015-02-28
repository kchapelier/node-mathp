"use strict";

var gulp = require('gulp'),
    jscs = require('gulp-jscs'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    mocha = require('gulp-mocha'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

var sourceFiles = ['./index.js', './properties/*.js', './functions/*.js'],
    buildFiles = ['./gulpfile.js'],
    testFiles = ['./test/*.js'];

gulp.task('lint', function () {
    return gulp
        .src([].concat(sourceFiles, buildFiles))
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter(stylish));
});

gulp.task('codestyle', function () {
    return gulp
        .src([].concat(sourceFiles, buildFiles, testFiles))
        .pipe(jscs());
});

gulp.task('build', function () {
    var dest = './build/',
        filename = 'mathp-generic-build',
        bundler = browserify({
            entries: ['./index.js'],
            standalone: 'Mathp'
        });

    return bundler
        .bundle()
        .pipe(source(filename + '.js'))
        .pipe(buffer())
        .pipe(gulp.dest(dest))
        .pipe(rename(filename + '.min.js'))
        .pipe(uglify({
            compress: {
                unused: false //remove unused function's arguments > side effect of modifying the function's length
            }
        }))
        .pipe(gulp.dest(dest));
});

gulp.task('test', function () {
    return gulp
        .src(testFiles)
        .pipe(mocha({
            reporter: 'spec'
        }));
});
