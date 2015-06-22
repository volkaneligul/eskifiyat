module.exports = function(grunt) {
    "use strict";

    var buildVersion = (grunt.option('buildVersion') || '1.0.0') + '.0';
    grunt.log.warn('Build Version: ' + buildVersion);

    grunt.initConfig({
        build: {
            version: buildVersion,
            environment: (grunt.option('environment') || 'dev')
        },
        meta: {
            src: {
                tasks: 'tasks',
                assets: 'SportsStore.WebUI/src/Web/assets',
                sass: '<%= meta.src.assets %>/sass',
                css: '<%= meta.src.assets %>/css',
                js: '<%= meta.src.assets %>/js',
                jsTests: 'SportsStore.WebUI/src/tests/JavaScriptTests'
            }
        }
    });

    grunt.loadTasks('tasks');

    grunt.registerTask('test', ['jasmine']);
    grunt.registerTask('style', ['sass']);
    grunt.registerTask('precommit', ['jsbeautifier', 'autoprefixer']);
    grunt.registerTask('default', ['jshint', 'jasmine', 'sass']);
};
