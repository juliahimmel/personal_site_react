var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory, Link, Switch} = require('react-router');
var Main = require('Main');
var AllProjects = require('AllProjects');
var OneProject = require('OneProject');
var Projects = require('Projects');

ReactDOM.render(
  <Router hash={hashHistory}>
    <Route path='/' component={Main} >
      <Route path='/projects' component={Projects}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
