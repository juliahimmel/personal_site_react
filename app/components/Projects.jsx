var React = require('react');
var Project = require('Project');
var OneProject = require('OneProject');
var AllProjects = require('AllProjects');
var projects = require('app/data/projects.js');

var Projects = React.createClass({
  render: function () {

    return (
      <div>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Projects;
