var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory, Link, browserHistory} = require('react-router');
var Main = require('Main');
var SplashPage = require('SplashPage');
var Projects = require('Projects');
var AllProjects = require('AllProjects');
var OneProject = require('OneProject');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={SplashPage}/>
      <Route component={Projects}>
        <Route path='/projects' component={AllProjects}/>
        <Route path='/projects/:id' component={OneProject}/>
      </Route>
    </Route>
  </Router>,
  document.getElementById('app')
);
