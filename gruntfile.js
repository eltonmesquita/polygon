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
          sourcemap: true,
          style: 'compact'
        },
        files: {
          'build/css/style.css': 'src/css/style.scss'
        }
      }
    },

    // Auto prefixer, configure it as you need
    autoprefixer: {
      options: {
        browsers: ['last 3 versions', 'ie 9', 'ie 8', 'ff 20', 'android 3'],
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
          'css/style.css': ['css/style.css'],
          'css/about.css': ['css/about.css'],
          'css/roundabout.css': ['css/roundabout.css'],
          'css/stores.css': ['css/stores.css']
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
      compress: {
        options: {
          report: 'gzip',
          restructure: false
        },
        files: {
          'build/css/**/*.css': ['build/css/**/*.css']
        }
      }
    },

    // Analyses the performance of the page(s)
    devperf: {
      options: {
        urls: [
          'http://localhost:8050'
        ]
      }
    },

    // Takes screenshots of the page(s) in several resolutions
    pageres: {
        index: {
            options: {
                url: 'http://localhost:8050',
                sizes: [
                          '1920x1080',
                          '1440x1024',
                          '1280x768',
                          '1024x768',
                          '1024x600',
                          '800x600',
                          '604x966',
                          '375x667',
                          '320x480',
                          '240x380'
                        ],
                dest: 'screenshots/index',
                delay: 2
            }
        }
    },

    // Launchs a server with livereload included
    connect: {
      client: {
        options: {
          port: 8050,
          base: 'build/',
          hostname: 'localhost',
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
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-remfallback');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-match-media');
  grunt.loadNpmTasks('grunt-csso');
  grunt.loadNpmTasks('grunt-devperf');
  grunt.loadNpmTasks('grunt-pageres');

  // Register the tasks
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('perf',    ['devperf', 'pageres']);
  grunt.registerTask('build',   ['sass', 'imagemin', 'autoprefixer', 'match_media', 'remfallback', 'csso', 'uglify']);

}
