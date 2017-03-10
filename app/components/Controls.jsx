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
    var renderStartStopClearButton = () => {
      if (countdownStatus === 'started') {
        return (
          <div>
            <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
            <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
          </div>
        );

      } else if (countdownStatus === 'stopped'){
        return (
          <div>
            <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
            <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
          </div>
        );
      }

      if(timerStatus === 'started') {
        return (
          <div>
            <button className="button secondary" onClick={this.onTimerStatusChange('paused')}>Pause</button>
            <button className="button alert hollow" onClick={this.onTimerStatusChange('stopped')}>Clear</button>
          </div>
        );
      } else if (timerStatus === 'stopped' || timerStatus === 'paused') {
        return (
          <div>
            <button className="button secondary" onClick={this.onTimerStatusChange('started')}>Start</button>
            <button className="button alert hollow" onClick={this.onTimerStatusChange('stopped')}>Clear</button>
          </div>
        );
      }
    };
    return (
      <div className="controls">
        {renderStartStopClearButton()}
      </div>
    );
  }
});

module.exports = Controls;
