module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['src/*.js']
    },
    babel: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'src/es6/easyegg.es5.js': 'src/es6/easyegg.js'
        }
      }
    },
    uglify: {
      options: {
        banner: '/*! easyegg.js <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/easyegg.js',
        dest: 'dist/easyegg.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'babel', 'uglify']);
};
