'use strict';

module.exports = function(grunt) {
    const sass = require('node-sass');
    require('time-grunt')(grunt);
    
    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin'
    });

    grunt.initConfig({
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist: {
                files: {
                    'css/styles.css': 'css/styles.scss'
                }
            }
        },
        watch: {
            files: 'css/*.scss',
            tasks: ['sass']
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'css/*.css',
                        '*.html',
                        'js/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: './'
                    }
                }
            }
        },
        copy: {
            html: {
                files: [{ // Copy all html files in distribution folder
                    expand: true,
                    dot: true,
                    cwd: './',
                    src: ['*.html'],
                    dest: 'dist/'
                }]
            },
            fonts: {
                files: [{ // Copy font files to distribution folder
                    expand: true,
                    dot: true,
                    cwd: 'node_modules/font-awesome',
                    src: ['fonts/*.*'],
                    dest: 'dist/'
                }]
            }
        },
        clean: {
            build: {
                src: ['dist/']
            }
        },
        imagemin : {
            dynamic: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: './',
                    src: ['img/*.{png, gif,jpg}'],
                    dest: 'dist/'
                }]
            }
        },
        useminPrepare: {
            foo: {
                dest: 'dist/',
                src: ['contactus.html', 'aboutus.html', 'index.html']
            },
            option: {
                flow: {
                    steps: {
                        css: ['cssmin'],
                        js: ['uglify']
                    },
                    post: {
                        css: [{
                            name: 'cssmin',
                            createConfig: function(context, block) {
                                var generated = context.options.generated;
                                generated.options = {
                                    keepSpecialComments: 0, rebase: false
                                }
                            }
                        }]
                    }
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {}
        },
        uglify : {
            dist: {}
        },
        cssmin: {
            dist: {}
        },
        filerev: { //filerevision number, as an additional extension of the name of css and js files
            options: { //how to compute the hash
                encoding: 'utf8',
                algorithm: 'md5',
                length: 20
            },
            release: {
                file: [
                    'dist/js/*.js',
                    'dist/css/*.css',
                ]
            }
        },
        usemin: {
            html: ['dist/contactus.html', 'dist/aboutus.html', 'dist/index.html'],
            options: {
                assetsDirs: ['dist', 'dist/js', 'dist/css']
            }
        },
        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true
                },
                files: {
                    'dist/contactus.html': 'dist/contactus.html',
                    'dist/aboutus.html': 'dist/aboutus.html',
                    'dist/index.html': 'dist/index.html'
                }
            }
        }
    });
    grunt.registerTask('css', ['sass']); // 'grunt css' will execute this task
    
    // Default task makes 'grunt' to execute it (no more parameters)
    grunt.registerTask('default', ['browserSync', 'watch']); // browserSync first, as watch depends on this. Watch is usually the last one
    
    grunt.registerTask('build', [ // 'grunt build'
        'clean', 
        'copy', 
        'imagemin',
        'useminPrepare',
        'concat',
        'cssmin',
        'uglify',
        'filerev',
        'usemin',
        'htmlmin'
    ])
}