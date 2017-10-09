module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 100,
            suffix: '_logo',
            quality: 100
          },{
            width: 1600,
            suffix: '_largexx',
            quality: 90
          },{
            width: 800,
            suffix: '_largex',
            quality: 70
          },{
            width: 750,
            suffix:'_medium',
            quality: 50
          },{
            width: 555,
            suffix: '_small',
            quality: 30
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};
