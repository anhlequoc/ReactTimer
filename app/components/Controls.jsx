var React = require('react');

var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    //onStatusChange: React.PropTypes.func.isRequired,
    timerStatus: React.PropTypes.string.isRequired,
    //onTimerStatusChange: React.PropTypes.func.isRequired
  },
  onStatusChange: function(newStatus) { {/*use function to return a function -> define new status right inside function called, no need to have 3 separated functions*/}
    return () => {
      this.props.onStatusChange(newStatus);
    };
  },
  onTimerStatusChange: function(newStatus) {
    return () => {
      this.props.onTimerStatusChange(newStatus);
    };
  },
  render: function() {
    var {countdownStatus, timerStatus} = this.props;
    var renderStartStopButton = () => {
      if (countdownStatus === 'started') {
        return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>;
      } else if (countdownStatus === 'paused'){
        return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>;
      }

      if(timerStatus === 'started') {
        return <button className="button secondary" onClick={this.onTimerStatusChange('stopped')}>Stop</button>;
      } else if (timerStatus === 'stopped') {
        return <button className="button secondary" onClick={this.onTimerStatusChange('started')}>Start</button>;
      }
    };

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    );
  }
});

module.exports = Controls;
