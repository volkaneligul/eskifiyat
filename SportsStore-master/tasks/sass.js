module.exports = function(grunt) {
    'use strict';

    grunt.config('sass', {
        options: {
            sourceMap: true,
            includePaths: require('node-bourbon').includePaths
        },
        dist: {
            files: {
                '<%= meta.src.css %>/global.css': '<%= meta.src.sass %>/global.sass'
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
};
