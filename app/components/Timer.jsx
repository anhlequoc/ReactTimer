var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
  getInitialState: function() {
    return {
      count: 0,
      timerStatus: 'stopped'
    };
  },
  handleStatusChange: function(newTimerStatus) {
    console.log(newTimerStatus);
    this.setState({timerStatus: newTimerStatus});
  },
  componentDidUpdate: function(preProps, preStates) {
    if (this.state.timerStatus !== preStates.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.handleStart();
          break;
        case 'stopped':
          this.setState({count: 0}); //dont' use break here
        case 'paused':
          clearInterval(this.timer);
          this.timer = null; //or = undefined
          break;
      }
    }
  },
  handleStart: function() {
    this.timer = setInterval(() => {
      this.setState({count: this.state.count + 1});
    }, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.timer);
  },
  render: function(){
    var {count, timerStatus} = this.state;

    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count} />
        <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
      </div>
    );
  }
});
module.exports = Timer;
