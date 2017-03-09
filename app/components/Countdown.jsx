var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
  getInitialState: function() {
    return {
      count: 0,
      countdownStatus: 'stopped'
    };
  },
  componentDidUpdate: function(prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case "started":
          this.startTimer();
          break;
        case "stopped":
          this.setState({count: 0}); {/*không dùng break để chạy tiếp code ở case dưới*/}
        case "paused":
          console.log(this.timer);
          clearInterval(this.timer);
          this.timer = null; //null or undefined?
          break;
      }
    }
  },
  componentWillUpdate: function(nextProps, nextState) {
    {/*chay trước componentdidUpdate để kiểm tra....*/}
  },
  componentWillMount: function() {
    console.log('componentWillMount'); {/*khi React mount vào component này*/}
  },
  componentDidMount: function() {
    console.log('componentDidMount');
  },
  componentWillUnmount: function() {
    console.log('componentDidUnmount'); {/*khi switch sang timer.jsx*/}
    clearInterval(this.timer);
    this.timer = null; //null or undefined?
  },
  startTimer: function() {
    this.timer = setInterval( () => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
      if (newCount === 0) {
        this.setState({countdownStatus: 'stopped'});
      }
    }, 1000);
  },
  handleSetCountdown: function(seconds){
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },
  handleStatusChange: function(newStatus) {
    this.setState({countdownStatus: newStatus});
  },
  render: function(){
    var {count, countdownStatus} = this.state;
    var renderControlArea = () => {
      if (countdownStatus !== 'stopped') {
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />;
      } else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown} />;
      }
    };
    return (
      <div>
        <h1 className="page-title">Countdown App</h1>
        <Clock totalSeconds={count} />
        {renderControlArea()};
      </div>
    );
  }
});

module.exports = Countdown;
