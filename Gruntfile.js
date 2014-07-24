module.exports = function(grunt)	{
	
	grunt.initConfig({
	
		pkg: grunt.file.readJSON('package.json'),
	
		uglify: {
			dist: {
				options: {
					banner: '/*! Copyrights <%= pkg.author %> | <%= pkg.name %> | v<%= pkg.version %> | <%= pkg.license %>  */\n',
					preserveComments: 'some'
				},
				files: {
					'dist/jquery.placeholderfallback.min.js': ['src/*.js']
				}
			}
		},
	
		watch: {
			script: {
				files: ['src/*.js'],
				tasks: ['uglify'],
				options: {
					spawn: false
				}
			}
		}
	
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['uglify', 'watch']);


};