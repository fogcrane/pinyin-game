const gulp = require('gulp')
const sass = require('gulp-sass')
const base64 = require('gulp-css-base64')
const rename = require('gulp-rename')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const flexbugsFixes = require('postcss-flexbugs-fixes')
const postCssOpts = [
  autoprefixer(['iOS >= 8', 'Android >= 4.1']),
  flexbugsFixes
]

/**
 * 样式编译的代码
 */
gulp.task('sass', function () {
  return gulp.src(['src/common/**/*.scss','src/app.scss','src/pages/**/*.scss'], { base: 'src' })
    .pipe(sass({
      outputStyle: 'expanded',
      precision: 8
    }).on('error', sass.logError))
    .pipe(base64({
      baseDir: "images"
    }))
    .pipe(postcss(postCssOpts))
    .pipe(rename(function (path) {
      path.extname = '.wxss'
    }))
    .pipe(gulp.dest('dist'))
})

/**
 * 复制页面
 */
gulp.task('pages', function () {
  return gulp.src([
      'src/app.js',
      'src/app.json',
      'src/app.wxss',
      'src/pages/**',
      'src/images/*',
      'src/utils/**',
      'src/templates/**',
      '!src/pages/**/*.scss',
      'src/wxParse/**',
    ], { base: 'src'})
    .pipe(gulp.dest('dist'))
})

/**
 * 监听变动
 */
gulp.task('watch', function () {
  gulp.watch([
    'src/app.scss',
    'src/scss/*.scss',
    'src/pages/**/*.scss',
		'src/templates/**/*.scss',
    'src/common/**/*.scss'
  ], ['sass'])
  gulp.watch([
    'src/app.js',
    'src/app.json',
    'src/app.wxss',
    'src/pages/**',
    'src/utils/**',
    'src/templates/**'
  ], ['pages'])
})

gulp.task('build', ['sass', 'pages'])
gulp.task('default', ['sass', 'pages', 'watch'])
