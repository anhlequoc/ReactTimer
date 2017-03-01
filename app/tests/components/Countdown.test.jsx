var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
  it('should exists', () => {
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown()', () => {
    it('should set state to started and countdown', (done) => {
      {/* steps: render the component and call handleSetCountdown() then make assertion */}
      var countdown = TestUtils.renderIntoDocument(<Countdown />);
      {/*countdown lúc này là 1 object của compoenent <Countdown /> luôn, có đầy đủ các attribute, function của component này, dùng để test*/}
      countdown.handleSetCountdown(10); {/*pass number of seconds to test*/}
      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      //continue checking the new count should be 9
      setTimeout( () => {
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001);

      {/*
        them done() để test được callback của setTimeout(), nếu không thì mocha không support và sẽ bi
      */}
    });

    it('should be 0 if user wait for a long time', (done) => {
      {/* steps: render the component and call handleSetCountdown() then make assertion */}
      var countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(1); {/*pass number of seconds to test*/}

      setTimeout( () => {
        expect(countdown.state.count).toBe(0);
        done();
      }, 3000);
    });
  });
});
