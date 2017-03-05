var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Controls = require('Controls');

describe('Controls', () => {
  it('should exists', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {
    it('should render pause button when being started', () => {
        var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
        var $el = $(ReactDOM.findDOMNode(controls));
        var $pauseButton = $el.find('button:contains(Pause)');

        expect($pauseButton.length).toBe(1);//length equals to the number of items it found
    });

    it('should render start button when being paused', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused" />);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $startButton = $el.find('button:contains(Start)');

      expect($startButton.length).toBe(1);
    });
  });
});
