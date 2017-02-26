var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });

  describe('render', () => {
    it('should render clock to output', () => {
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
      var $el = $(ReactDOM.findDOMNode(clock));
      {/*
        - $el will store the root of component in term of the DOM
        - ReactDOM.findDOMNode() convert component into the actual HTML that it's rendered to browser
      */}
      var actualText = $el.find('.clock-text').text();
      {/* text() show the text out*/}

      expect(actualText).toBe('01:02');
    });
  });

  describe('formatSeconds', () => {
    it('should format in minutes and seconds', () => {
      {/*purpose: render a component so we're able to access the message on it
          - render Clock component so we can call formatSeconds as a standard function
      */}
      var clock = TestUtils.renderIntoDocument(<Clock/>); {/*}//Clock là tên component đc define ở trên (line 7)*/}
      var seconds = 615;
      var expected = '10:15';
      var actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });

    it('should format in minutes and seconds when min/sec are less than 10', () => {
      {/*purpose: render a component so we're able to access the message on it
          - render Clock component so we can call formatSeconds as a standard function
      */}
      var clock = TestUtils.renderIntoDocument(<Clock/>); {/*}//Clock là tên component đc define ở trên (line 7)*/}
      var seconds = 61;
      var expected = '01:01';
      var actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });
  });
});
