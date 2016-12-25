var gulp = require('gulp');

var browserSync = require('browser-sync');

// Static server
gulp.task('default', function() {
    browserSync.init({
        server: {
            baseDir: 'aluraframe/client'
        }
    });
    // ['client/*.js','client/*.css', 'client/*.html']
    gulp.watch('.client/**/*').on('change', browserSync.reload);
});
