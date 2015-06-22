module.exports = function(grunt) {
    'use strict';

    grunt.config('jsbeautifier', {
        'default': {
            src: ['Gruntfile.js',
                '<%= meta.src.tasks %>/*.js',
                '<%= meta.src.js %>/js/*.js',
                '<%= meta.src.js %>/globals/*.js',
                '<%= meta.src.js %>/modules/*.js',
                '<%= meta.src.js %>/pages/*.js',
                '<%= meta.src.js %>/viewmodels/*.js',
                '<%= meta.src.jsTests %>/builders/*.js',
                '<%= meta.src.jsTests %>/builders/**/*.js',
                '<%= meta.src.jsTests %>/spec/**/*.js'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-jsbeautifier');
};
