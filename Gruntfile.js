module.exports = function  (grunt) {
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
        dest: 'dest/dest.min.js'
      }
    }
  });

  // load the plugin that provides the 'uglify' task
  // 插件加载声明
  grunt.loadNpmTasks('grunt-contrib-uglify');     // 压缩js代码
  grunt.loadNpmTasks('grunt-contrib-jshint');     // js代码校验
  // grunt.loadNpmTasks('grunt-contrib-qunit');      // 单元测试
  // grunt.loadNpmTasks('grunt-contrib-watch');   // 文件监控
  // grunt.loadNpmTasks('grunt-contrib-concat');  // 合并js文件

  // Default task(s)
  grunt.registerTask('default', ['uglify']);  // 定义组合任务
};
