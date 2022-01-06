/*eslint
no-console: 0
*/

var gulp = require('gulp');

require('./automation/building.js');
require('./automation/linting.js');
require('./automation/releasing.js');
require('./automation/misc.js');


gulp.task('watch', gulp.series(['compile'], function () {
	gulp.watch("src/**/*", gulp.series(['compile']));
}));

gulp.task('watch-web', gulp.series(['webpack'], function () {
	gulp.watch("src/**/*",gulp.series(['webpack']));
}));
