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
      //console.log(countdown);
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

    it('shoult pause countdown on Pause status', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('paused');

      setInterval( () => {
        expect(countdown.state.count).toBe(3);
        expect(countdown.state.countdownStatus).toBe('paused');
        done(); {/*goi done() để check callback khi dùng interval*/}
      }, 1001);
    });

    it('shoult stop countdown on Stop status', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('stopped');

      setInterval( () => {
        expect(countdown.state.count).toBe(0);
        expect(countdown.state.countdownStatus).toBe('stopped');
        done(); {/*goi done() để check callback khi dùng interval*/}
      }, 1001);
    });

  });
});
