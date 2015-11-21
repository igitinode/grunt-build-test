module.export = function  (grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      option: {
        banner: '/*!\n' +
            ' * grunt-build-test v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright 2014-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under the <%= pkg.license %> license\n' +
            ' * <%= pkg.name %> rebuild in <%=  grunt.template.today("yyyy-mm-dd") %>' +
            ' */\n',
      },
      build: {
        src: 'js/controller/*.js',
        dest: 'dist/dest.min.js'
      }
    }
  });

  // load the plugin that provides the 'uglify' task
  grunt.loadNpmTasks('grunt-contrib-uglify');  // 插件加载声明
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s)
  grunt.registerTask('default', ['uglify']);  // 定义组合任务
};
