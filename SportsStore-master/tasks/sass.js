module.exports = function(grunt) {
    'use strict';

    grunt.config('sass', {
        options: {
            sourceMap: true,
            includePaths: require('node-bourbon').includePaths
        },
        dist: {
            files: {
                '<%= meta.src.css %>/global.css': '<%= meta.src.sass %>/global.sass',
                '<%= meta.src.css %>/global-checkout.css': '<%= meta.src.sass %>/global-checkout.sass'
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
};
