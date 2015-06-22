module.exports = function(grunt) {
    'use strict';

    grunt.config('jasmine', {
        coverage: {
            src: [
                '<%= meta.src.js %>/viewmodels/**/*.js',
                '<%= meta.src.js %>/viewmodels/*.js',
                '<%= meta.src.js %>/modules/**/*.js',
                '<%= meta.src.js %>/pages/**/*.js'
            ],
            options: {
                keepRunner: true,
                display: 'short',
                summary: true,
                specs: [
                    '<%= meta.src.jsTests %>/builders/*.js',
                    '<%= meta.src.jsTests %>/builders/**/*.js',
                    '<%= meta.src.jsTests %>/spec/viewmodels/**/*.js',
                    '<%= meta.src.jsTests %>/spec/extensions/*.js'
                ],
                vendor: [
                    '<%= meta.src.jsTests %>/lib/*.js',
                    '<%= meta.src.js %>/vendor/*.js',
                    '<%= meta.src.js %>/plugins/*.js',
                    '<%= meta.src.js %>/extensions/*.js',
                    '<%= meta.src.js %>/*.js',
                    '<%= meta.src.js %>/globals/*.js'
                ],
                template: require('grunt-template-jasmine-istanbul'),
                templateOptions: {
                    coverage: '.test-logs/coverage.json',
                    report: [{
                        type: 'html',
                        options: {
                            dir: '.test-logs/html'
                        }
                    }, {
                        type: 'teamcity'
                    }]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
};
