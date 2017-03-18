var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');

// Load foundation
//require('style!css!foundation-sites/dist/css/foundation.min.css'); - remove this line after adding 'sassLoader' obj in webpack.config
$(document).foundation();

//load app/styles/app.css
require('style!css!sass!applicationStyles');{/*load alias applicationStyles in webpack.config by using style loader, css loader and sass loaders*/}

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path ="countdown" component={Countdown}/>
			<IndexRoute component={Timer} />
		</Route>
	</Router>,
	document.getElementById('app')
);
