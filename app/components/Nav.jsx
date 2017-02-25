var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function(){
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Timer App</li>
            <li className="menu-text">
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
            </li>
            <li className="menu-text">
              <Link to="/About" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
            <ul className="menu">
              <li className="menu-text">
                <span>Created By </span>
                <a href="https://github.com/anhlequoc">Anh Le</a>
              </li>
            </ul>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
