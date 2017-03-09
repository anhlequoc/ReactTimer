var React = require('react');
var Controls = require('Controls');
var Clock = require('Clock');

var Timer = React.createClass({
  getInitialState: function () {
    return {
      timerStatus: 'stopped'
    };
  },
  handleTimerStatusChange: function(newStatus) {
    this.setState({
      timerStatus: newStatus
    });
  },
  render: function(){
    var {timerStatus, countdownStatus} = this.state;
    return (
      <div>
        <h1>Timer App</h1>
        <Clock />
        <Controls timerStatus={timerStatus} countdownStatus={''} onTimerStatusChange={this.handleTimerStatusChange}/>
      </div>
    );
  }
});
module.exports = Timer;
