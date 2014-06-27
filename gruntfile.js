module.exports = function(grunt) {

  grunt.initConfig({

    // Optmizes the images
    imagemin: {
      dynamic: {
        options: {
          optimizationLevel: 5,
        },
        files: [{
          expand: true,
          cwd: 'src/img/',
          src: ['src/img/**/*.{png,jpg,gif,svg}'],
          dest: 'build/img/'
        }]
      }
    },

    // Compiles SCSS files
    sass: {
      dist: {
        options: {
          sourcemap: 'false',
          style: 'compressed'
        },
        files: {
          'build/css/style.css': 'src/css/style.scss',
          'build/css/slick.css': 'src/css/vendor/slick.scss'
        }
      }
    },

    // Adds all the prefixes in the css files
    autoprefixer: {
      options: {
        browsers: ['last 3 versions', 'ie 9', 'ie 8', 'ff 20', 'android 3'],
        sourcemap: 'false'
      },
      no_dest: {
        // File to output
        src: 'build/css/style.css',
        dest: 'build/css/style.css'
      },
    },

    // Rem fallback
    remfallback: {
      options: {
        log: true,
        replace: false,
      },
      your_target: {
        files: {
          'css/style.css': ['css/style.css']
        },
      },
    },

    // Minifies and merges the javascripts
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'build/js/main.js': ['src/js/main.js'],
          'build/js/modernizr.js': ['src/js/modernizr.js'],
        }
      }
    },

    // The watch task + livereload :D
    watch: {
      options: {
        livereload: true,
      },
      php: {
        files: ['**/**.php']
      },
      css: {
        files: ['src/css/**/**.scss'],
        tasks: ['sass', 'autoprefixer']
      },
      uglify: {
        files: ['src/js/**/**.js'],
        tasks: ['uglify']
      },
      imagemin: {
        files: ['src/img/**/*.{png,jpg,gif}'],
        tasks: ['imagemin']
      }
    }

  });

  // loads plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-remfallback');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // register tasks
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['sass', 'imagemin', 'autoprefixer', 'remfallback', 'uglify']);


}
