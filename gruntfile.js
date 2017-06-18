module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['gruntfile.js', 'index.js'],
      options: {
        undef: true,
        node: true,
        jshintrc: true,
        esversion: 6,
        globals: {
          require: true,
          module: true,
          console: true,
          esversion: 6,
          }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
 

  grunt.registerTask('run', ['jshint']);

};