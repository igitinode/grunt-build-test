module.exports = function  (grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!\n' +
            ' * grunt-build-test v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright 2014-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under the <%= pkg.license %> license\n' +
            ' * <%= pkg.name %> rebuild in <%=  grunt.template.today("yyyy-mm-dd") %>' +
            ' */\n',
    // Task configuration.
    // 指定清楚那些目录文件，指定清除部分('clean:dest')
    // 如果不指定，则全部执行('clean')
    clean: {
      dest: 'dest',
      docs: 'docs/dest'
    },

    // js校验, 配置校验部分
    jshint: {
      options: {  // 校验规则配置参数
        jshintrc: '.jshintrc'
      },
      grunt: {    // 校验文件
        src: ['Gruntfile.js']
      },
      assert: {   // 校验文件
        src: ['js/controller/*.js']
      }
    },
    uglify: {
      build: {
        src: 'js/controller/*.js',
        dest: 'dest/dest.min.js'
      }
    }
  });

  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });
  require('time-grunt')(grunt);

  // load the plugin that provides the 'uglify' task
  // 插件加载声明
  grunt.loadNpmTasks('grunt-contrib-uglify');     // 压缩js代码
  grunt.loadNpmTasks('grunt-contrib-jshint');     // js代码校验
  // grunt.loadNpmTasks('grunt-contrib-qunit');      // 单元测试
  // grunt.loadNpmTasks('grunt-contrib-watch');   // 文件监控
  // grunt.loadNpmTasks('grunt-contrib-concat');  // 合并js文件

  // Default task(s)
  grunt.registerTask('default', ['clean', 'jshint', 'uglify']);  // 定义组合任务
};
