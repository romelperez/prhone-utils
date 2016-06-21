const gulp =        require('gulp');
const streamify =   require('gulp-streamify');
const rename =      require('gulp-rename');
const gutil =       require('gulp-util');
const uglify =      require('gulp-uglify');
const source =      require('vinyl-source-stream');
const browserify =  require('browserify');

gulp.task('uncompressed', function () {
  return browserify({
    entries: './src/index.js'
  })
  .transform('babelify', {
    presets: ['es2015']
  })
  .bundle()
  .pipe(source('./src/index.js'))
  .pipe(rename({
    dirname: '',
    basename: 'prhone-utils'
  }))
  .pipe(gulp.dest('./dist'));
});

gulp.task('compressed', ['uncompressed'], function () {
  return gulp.src('./dist/prhone-utils.js')
    .pipe(rename({
      basename: 'prhone-utils.min'
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['compressed']);
