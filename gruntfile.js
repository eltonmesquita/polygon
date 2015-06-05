module.exports = function(grunt) {

  grunt.initConfig({

    // Optimizes the images
    imagemin: {
      dynamic: {
        options: {
          optimizationLevel: 6,
        },
        files: [{
          expand: true,
          cwd: 'src/img',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'build/img/'
        }]
      }
    },

    // Compiles SASS files with sourcemaps
    sass: {
      dist: {
        options: {
          sourcemap: false,
          style: 'expanded'
        },
        files: {
          'build/css/style.css': 'src/css/style.scss'
        }
      }
    },

    // Auto prefixer, configure it as you need
    autoprefixer: {
      options: {
        browsers: ['last 3 versions', 'ie 8', 'ff 20', 'android 3'],
        map: true
      },
      no_dest: {
        src: 'build/css/*.css'
      },
    },

    // Fallback for CSS' REM unit
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

    // Minify your javascripts
    uglify: {
      options: {
        mangle: false
      },
       my_target: {
        files: [{
            expand: true,
            cwd: 'src/js',
            src: '**/*.js',
            dest: 'js'
        }]
      }
    },

    // Creates a dedicated ie.css with all the MQ's
    match_media: {
      ie: {
        files: {
          'build/css/ie.css': ['build/css/style.css']
        }
      }
    },

    // Compress CSS
    csso: {
      dynamic_mappings: {
        expand: true,
        cwd: 'build/css/',
        src: ['*.css', '!*.min.css'],
        dest: 'build/css/',
        ext: '.css'
      }
    },

    // Launchs a server with livereload included
    connect: {
      client: {
        options: {
          port: 8050,
          base: 'build/',
          hostname: '*',
          livereload: true
        }
      }
    },

    // Configures the watch task
    watch: {
      options: {
        livereload: true,
      },
      html: {
        files: ['**/**.html'],
        tasks: ['special-html']
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

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-remfallback');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-match-media');
  grunt.loadNpmTasks('grunt-csso');

  // Register the tasks
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build',   ['sass', 'imagemin', 'autoprefixer', 'match_media', 'remfallback', 'csso', 'uglify']);

}
