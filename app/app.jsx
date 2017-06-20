var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');

ReactDOM.render(
  <Router hash={hashHistory}>
    <Route path="/" component={Main}/>
  </Router>,
  document.getElementById('app')
);
