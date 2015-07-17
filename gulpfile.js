var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	minifyCSS = require('gulp-minify-css'),
	plumber = require('gulp-plumber');

gulp.task('html', function() {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('dist/'));
});

gulp.task('scripts', function() {
	gulp.src('src/js/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js/'));
});

gulp.task('styles', function() {
	gulp.src('src/css/**/*.css')
		.pipe(minifyCSS())
		.pipe(rename('style.css'))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('images', function() {
  return gulp.src('src/images/*')
    .pipe(gulp.dest('dist/images/'));
});

gulp.task('watch', function() {
	gulp.watch('src/js/**/*.js', ['scripts']);
	gulp.watch('src/styl/**/*.styl', ['styles']);
});

gulp.task('default', ['html','scripts', 'styles', 'images']);
