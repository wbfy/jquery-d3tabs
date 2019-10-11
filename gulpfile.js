/**
 * Build project
 * Requires Gulp 4.0.0
 */
var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass');

gulp.task
	(
		'compile.project',
		function (doneCallBack) {
			gulp.src(['src/*.js'])
				.pipe(concat('jquery-d3tabs.min.js'))
				.pipe(uglify())
				.pipe(gulp.dest('dist'));

			gulp.src(['demo.scss'])
				.pipe(concat('demo.min.css'))
				.pipe(sass({ outputStyle: 'compressed', includePaths: ['client/scss'] }))
				.pipe(gulp.dest('.'));

			doneCallBack();
		}
	);

gulp.task('compile', gulp.parallel('compile.project'));