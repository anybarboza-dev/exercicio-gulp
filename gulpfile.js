const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

const paths = {
    scss: './src/scss/**/*.scss',
    js: './src/js/**/*.js',
    images: './src/images/**/*'
};


function compileSass() {
    return gulp.src(paths.scss)
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
}



function scripts() {
    return gulp.src(paths.js)
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
}

function compressImages() {
    return gulp.src(paths.images)
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(compileSass, scripts, compressImages);