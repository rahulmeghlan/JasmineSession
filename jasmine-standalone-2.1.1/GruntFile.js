module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jasmine: {
            pivotal: {
                src: 'src/*.js',
                options: {
                    specs: 'spec/*Spec.js',
                    helpers: 'spec/*Helper.js',
                    vendor: ['lib/jquery/jquery-1.11.1.js', 'lib/jquery/jasmine-jquery.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
//    grunt.loadNpmTasks('jasmine-jquery');

    grunt.registerTask('default', ['jasmine']);

};