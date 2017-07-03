var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory, Link, browserHistory} = require('react-router');
var Main = require('Main');
var AllProjects = require('AllProjects');
var OneProject = require('OneProject');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main} />
    <Route path='/projects' component={AllProjects}/>
    <Route path='/projects/:id' component={OneProject}/>
  </Router>,
  document.getElementById('app')
);
