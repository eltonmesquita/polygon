module.exports = function(grunt) {

  grunt.initConfig({

    // Variables
    dirs: {
        output: 'public'
    },

    // Clear the build directory
    clean: ['<%= dirs.output %>'],

    // Optimizes the images
    image: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'src/img/',
          src: ['**/*.{png,jpg,gif,svg}'],
          dest: '<%= dirs.output %>/img'
        }]
      }
    },

    // Compiles SASS files with sourcemaps
    sass: {
      dist: {
        options: {
          sourcemap: true,
          style: 'expanded'
        },
        files: {
          '<%= dirs.output %>/style.css': 'src/css/style.scss'
        }
      }
    },

     // Adds prefixes, rem fallbacks and compact the css
    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')({
            browsers: ['last 3 versions', 'ie 8', 'android 4']
          }), // add vendor prefixes
          require('pixrem')(), // add fallbacks for rem units
          require('cssnano')() // minify the result
        ]
      },
      dist: {
        src: '<%= dirs.output %>/**/*.css'
      }
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
          '<%= dirs.output %>/ie.css': ['<%= dirs.output %>/style.css']
        }
      }
    },

    // Compress CSS
    csso: {
      dynamic_mappings: {
        expand: true,
        cwd: '<%= dirs.output %>/css/',
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

    // Copies fonts and images when developing for faster building
    copy: {
      img: {
        expand: true,
        cwd: 'src/img/',
        src: '**/**.{png,jpg,gif}',
        dest: '<%= dirs.output %>/img',
        flatten: false,
        filter: 'isFile'
      },
      fonts: {
        expand: true,
        cwd: 'src/fonts/',
        src: '**/**.{eot,ttf,woff,woff2}',
        dest: '<%= dirs.output %>/fonts',
        flatten: false,
        filter: 'isFile'
      }
    },

    // Configures the watch task
    watch: {
      options: {
        livereload: true,
      },
      css: {
        files: ['src/css/**/**.scss'],
        tasks: ['sass', 'postcss']
      },
      uglify: {
        files: ['src/js/**/**.js'],
        tasks: ['uglify']
      },
      imagemin: {
        files: ['src/img/**/*.{png,jpg,gif}'],
        tasks: ['copy:img']
      }
    }

  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-image');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-match-media');
  grunt.loadNpmTasks('grunt-csso');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Register the tasks
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build',   ['clean',
                                 'sass',
                                 'image',
                                 'postcss',
                                 'match_media',
                                 'csso',
                                 'uglify']);

}
