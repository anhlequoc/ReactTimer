var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  // console.log(props.children);
  return (
    <div>
      <Nav></Nav>
      <div>
        <p> Main.jsx rendered</p>
        {props.children}
      </div>
    </div>
  );
};

module.exports = Main;
