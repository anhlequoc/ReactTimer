# Section 8 - Testing Component Lifecycle
## My React Timer App
- create _navigation.scss in app/styles/components
- create _variable.scss in app/styles/base that contains all scss variables for app
  > (underscore) means the file is just a part, scss should load it with another file_

### Clip 68. Configuring Tests with Webpack in React
  > GOAL: from terminal run: npm test

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

### Clip 69. Adding routes container components
  - add two new files: countdown.jsx and timer.jsx
  - using route modules to link module
  > need to learn more about route modules: RouteIndex, IndexLink, active-link

### Clip 70 + 71: Clock component
  - create new module Clock (Clock.jsx)
  - create new test file for Clock module (test/components/Clock.test.jsx): goal is should return string
  - install react-addons-test-utils modules for testing, then declare test case in Clock.test.jsx file mentioned above
  - in Clock.test.jsx: loading components for testing
    ```javascript
      var clock = TestUtils.renderIntoDocument(<Clock/>)
      // render Clock component so we can call formatSeconds() as a standard function like below
      var actual = clock.formatSeconds(seconds);      
    ```

  - (clip 71) Document of Testing componenet is definitely lacking, so author needs a lot of hours to find this:
    ```javascript
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
      var $el = $(ReactDOM.findDOMNode(clock));
      /*
      allow accessing to html element using jQuery syntax in jsx
      - $el will store the root of component in term of the DOM
      - ReactDOM.findDOMNode() convert component into the actual HTML that it's rendered to browser
      */
    ```

### Clip 73 - Testing component with Spies (from expect lib)
    > spy is function that is created by expect library. it's used to assert when or not a function is called

    ```javascript
      var spy = expect.createSpy();
      //...
      expect(spy).toHaveBeenCalledWith(109);
      expect(spy).toNotHaveBeenCalled();
    ```
### Clip 74 - Starting the count down
  - create new state in Countdown.jsx, named countdownStatus (has 2 status: stopped and started)
  - in order to listen when "countdownStatus" state change from "stopped" to "started" or "paused" and vice versa, use a built-in function of react - componentDidUpdate(prevProps, prevState)
  - use switch - case in this componentDidUpdate to call corresponding function with each status
    +status is started: call function setTimer() in interval of 1000 ms. note that only reduce the count state to 0, it should not be negative number
