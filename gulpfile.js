var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var changed    = require('gulp-changed');
var concat = require("gulp-concat");
var imagemin   = require('gulp-imagemin');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');

var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var browserSync = require('browser-sync').create();
var historyApiFallback = require('connect-history-api-fallback');

var configMain = {
  src: './src/js/app.js',
  dest: './build/js',
  outputName: 'app.js',
  debug: true
};

var handleBrowserifyError = function(err) {
  gutil.log(
      gutil.colors.red("Browserify compile error:"),
      err.message,
      "\n\n",
      err.codeFrame
  );
};

watchify.args.debug = configMain.debug;
var bundlerMain = watchify(browserify(configMain.src, watchify.args));

bundlerMain.transform("babelify", {presets: ["es2015", "stage-0", "react"], plugins: ["transform-react-display-name"]})

gulp.task('browserifyMain', bundleMain);
bundlerMain.on('update', bundleMain);

function bundleMain() {
  return bundlerMain.bundle()
  // log errors if they happen
  .on('error', handleBrowserifyError)
  .pipe(source(configMain.outputName))
  .pipe(gulp.dest(configMain.dest))
}

gulp.task('images', function() {
  var dest = './build/images';

  return gulp.src('./src/images/**')
    .pipe(plumber())
    .pipe(changed(dest)) // Ignore unchanged files
    .pipe(imagemin()) // Optimize
    .pipe(gulp.dest(dest))
    ;
});

gulp.task('sass', function () {
  gulp.src('./src/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream());
});

gulp.task('css', function() {
  var dest = './build/css';

  return gulp.src('./src/css/**')
    .pipe(plumber())
    .pipe(changed(dest))
    .pipe(gulp.dest(dest))
    .pipe(browserSync.stream());
    ;
});

gulp.task('fonts', function() {
  var dest = './build/fonts';

  return gulp.src('./src/fonts/**')
    .pipe(plumber())
    .pipe(changed(dest))
    .pipe(gulp.dest(dest))
    ;
});

gulp.task('markup', function() {
  return gulp.src('./src/htdocs/**')
    .pipe(plumber())
    .pipe(gulp.dest('./build'))
    ;
});

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./build",
      middleware: [historyApiFallback()]
    }
  })
});

gulp.task('default', ['browser-sync', 'markup', 'browserifyMain', 'sass', 'images', 'css', 'fonts'], function() {
  gulp.watch('src/htdocs/**', ['markup']);
  gulp.watch('src/sass/**', ['sass']);
  gulp.watch('src/images/**', ['images']);
  gulp.watch('src/js/**', ['browserifyMain']);
  gulp.watch('src/css/**', ['css']);
  gulp.watch('src/fonts/**', ['fonts']);
});
