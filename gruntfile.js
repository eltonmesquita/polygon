module.exports = function (grunt) {
  grunt.initConfig({
    sass: {
      files: {
        expand: true, // allow dynamic building
        cwd: 'css/', // source files mask
        src: '**/*.scss',
        dest: 'css/min/', // destination folder
        flatten: true, // remove all unnecessary nesting
        ext: '.css'
      }
    },
    autoprefixer: {
      files: {
        src: 'css/min/style.css',
        dest: 'css/min/autoprefixer.css'
      }
    },
    cssmin: {
      minify: {
        src: 'css/min/autoprefixer.css',
        dest: 'css/min/min.css'
      }
    }
  });
  // load plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['sass', 'autoprefixer', 'cssmin']);
};