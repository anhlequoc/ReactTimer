var React = require('react');
var Controls = require('Controls');
var Clock = require('Clock');

var Timer = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      timerStatus: 'stopped'
    };
  },
  handleTimerStatusChange: function(newStatus) {
    this.setState({
      timerStatus: newStatus
    });
  },
  startCountTimer: function() {
    this.timer = setInterval(() => {
      //var currentCount = this.state.count + 1;
      this.setState({
        count: this.state.count + 1
      });
    },1000);
  },
  componentDidUpdate: function(prevProps, preStates) {
    if (this.state.timerStatus !== preStates.timerStatus) {
      switch(this.state.timerStatus){
        case 'started':
          this.startCountTimer();
          break;
        case 'paused':
          clearInterval(this.timer);
          this.timer = null;
          break;
        case 'stopped':
          this.setState({count: 0});
          clearInterval(this.timer);
          this.timer = null;
          break;
      }
    }
  },
  render: function(){
    var {count, timerStatus, countdownStatus} = this.state;
    console.log(count);
    return (
      <div>
        <h1>Timer App</h1>
        <Clock totalSeconds={count} onTimerStatusChange={this.handleStatusChange}/>
        <Controls timerStatus={timerStatus} countdownStatus={''} onTimerStatusChange={this.handleTimerStatusChange}/>
      </div>
    );
  }
});
module.exports = Timer;
