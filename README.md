My React Timer App
- create _navigation.scss in app/styles/components
- create _variable.scss in app/styles/base that contains all scss variables for app
  > (underscore) means the file is just a part, scss should load it with another file_

### 5. Configuring Tests with Webpack in React
  > GOAL: from ternimal run: npm test

  - install modules (7, 8, modules) ( --save-dev)
    + karma@0.13.22 //test runner
    + karma-chrome-launcher@0.2.2
    + karma-mocha@0.2.2
    + karma-mocha-reporter@2.0.0
    + karma-sourcemap-loader@0.3.7
    + karma-webpack@1.7.0
    + mocha@2.4.5
    + expect@1.14.0

  - create new file in root: karma.conf.js to configure karma. This is configure file for karma
  - run first test in app/tests/app.test.jsx
