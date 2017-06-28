var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory, Link} = require('react-router');
var Main = require('Main');
var OneProject = require('OneProject');

ReactDOM.render(
  <Router hash={hashHistory}>
    <Route path="/" component={Main}/>
    <Route path='/projects/:id' component={OneProject}/>
  </Router>,
  document.getElementById('app')
);
