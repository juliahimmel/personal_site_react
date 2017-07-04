var React = require('react');
var Project = require('Project');
var OneProject = require('OneProject');
var AllProjects = require('AllProjects');
var ProjectsNav = require('ProjectsNav');
var ProjectsFooter = require('ProjectsFooter');
var projects = require('app/data/projects.js');

var Projects = React.createClass({
  render: function () {

    return (
      <div>
        <ProjectsNav/>
        {this.props.children}
        <ProjectsFooter/>
      </div>
    )
  }
});

module.exports = Projects;
