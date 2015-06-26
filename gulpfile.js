var gulp = require('gulp');

gulp.task('bundle', function(cb) {
   var Builder = require('systemjs-builder');
   var builder = new Builder();
   builder.reset();

   builder.loadConfig("src/config.js")
      .then(function() {
         builder.config({
            baseURL: "./src"
         });

         return builder.buildSFX("app/index.ts!", "src/build/build.js", {
            minify: true, verbose: true
         });
      })
      .then(function() {
         console.log('Build complete');
         cb();
      })
      .catch(function(err) {
         console.log(err);
         cb(err);
      });
});
