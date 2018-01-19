var gulp = require("gulp");
var gutil = require("gulp-util");
var path = require('path');
var WebpackDevServer = require("webpack-dev-server");
var minifyCSS = require('gulp-csso');
const image = require('gulp-image');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var webpackStream = require('webpack-stream');
var webpack = require('webpack');

gulp.task('webpack', function() {
  return gulp.src(['src/js/*.js', 'src/js/**/*.js'])
    .pipe(webpackStream({
        entry: './src/js/script.js',
        devtool: 'source-map',
        output: {
          filename: 'bundle.min.js',
          path: path.resolve(__dirname, 'dist')
        },
        plugins: [
            new UglifyJsPlugin({sourceMap: true})
        ]
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task("copy-json", function() {
    return gulp.src('./resources/data/*.json')
    .pipe(gulp.dest('./dist/data'));
});

gulp.task("webpack-dev-server", function(callback) {
    // Start a webpack-dev-server
    var compiler = webpack({
        entry: './src/js/script.js',
        output: {
          filename: 'bundle.min.js',
          path: path.resolve(__dirname, 'dist')
        }
    });

    new WebpackDevServer(compiler, {
        // server and middleware options
    }).listen(8080, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        // Server listening
        gutil.log("[webpack-dev-server]", "http://localhost:8080/bam/index.html");

        // keep the server alive or continue?
        // callback();
    });
});

gulp.task('css', function(){
    return gulp.src(['src/css/*.css', 'node_modules/bootstrap/dist/css/bootstrap.min.css'])
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'))
});
  
gulp.task('image', function () {
    gulp.src('./resources/img/*')
        .pipe(image())
        .pipe(gulp.dest('./dist/img'));
});

gulp.task('html', function() {
    gulp.src('src/index.html')
    .pipe(gulp.dest('./dist/'));
});

gulp.task('webfonts', function() {
    gulp.src('src/webfonts/*')
    .pipe(gulp.dest('./dist/webfonts/'));
});

gulp.task('default', [ 'copy-json','html', 'css', 'image', 'webpack', 'webpack-dev-server', 'webfonts' ]);

