module.exports = function(grunt) {
    'use strict';

    grunt.config('autoprefixer', {
        options: {
            map: true,
            browsers: ['last 2 versions', "> 5%"]
        },
        dist: {
            files: {
                '<%= meta.src.css %>/global.css': '<%= meta.src.css %>/global.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-autoprefixer');
};
