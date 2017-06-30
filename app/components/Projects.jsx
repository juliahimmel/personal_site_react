var React = require('react');
var Project = require('Project');
var OneProject = require('OneProject');
var AllProjects = require('AllProjects');
var {Route, Router, IndexRoute, hashHistory, Link, Switch} = require('react-router');

var Projects = React.createClass({
  getInitialState: function () {
    return {
      projects: [
        {
          id: 1,
          title: 'Tattle App',
          subtitle: 'Some subtitle',
          shortDescription: 'A Short Description',
          longDescription: 'A Long Description',
          images: []
        },
        {
          id: 2,
          title: 'Second Project',
          subtitle: 'Some subtitle two',
          shortDescription: 'A Short Description two',
          longDescription: 'A Long Description two',
          images: []
        }
      ]
    };
  },
  render: function () {
    var {projects} = this.state;

    return (
      <div>
        <Switch>
          <Route path='/projects' component={AllProjects} />
          <Route path='/projects/:id' component={OneProject}/>
        </Switch>
      </div>
    )
  }
});

module.exports = Projects;
