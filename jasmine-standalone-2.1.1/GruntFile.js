module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jasmine: {
            pivotal: {
                src: 'src/*.js',
                options: {
                    specs: 'spec/*Spec.js',
                    helpers: 'spec/*Helper.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask('default', ['jasmine'])

};