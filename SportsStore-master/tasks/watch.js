module.exports = function(grunt) {
    'use strict';

    grunt.config('watch', {
        scripts: {
            files: ['<%= meta.src.tasks %>/*js', 'src/**/*.js'],
            tasks: ['jasmine', 'jshint']
        },
        css: {
            files: ['<%= meta.src.sass %>/**/*.{scss,sass}', '<%= meta.src.sass %>/*.{scss,sass}'],
            tasks: ['sass']
        },
        configFiles: {
            files: ['Gruntfile.js'],
            tasks: ['default']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
};
