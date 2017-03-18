var webpackConfig = require('./webpack.config.js');
module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: [
      'node_modules/jquery/dist/jquery.min.js', //fix for karma issue when having jQuerry in code
      'node_modules/foundation-sites/dist/js/foundation.min.js', //fix for karma issue when having jQuerry in code
      'app/tests/**/*.test.jsx',
    ],
    preprocessors: {
      'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    client: {
      mocha: {
        timeout: '5000'//set timeout for test
      }
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
};
//get all .test.jsx files in tests folder's all subfolders
//sourcemap meaning when we get error messages in our tests, they are not using the bundle.js, they use actual jsx files
