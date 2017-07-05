var React = require('react');
var Project = require('Project');
var OneProject = require('OneProject');
var AllProjects = require('AllProjects');
var ProjectsNav = require('ProjectsNav');
var ProjectsFooter = require('ProjectsFooter');
var projects = require('app/data/projects.js');

var Projects = React.createClass({
  getInitialState: function () {
    return {
      title: ''
    }
  },
  displayTitle: function (title) {
    this.setState({
      title: title
    });
  },
  render: function () {
    return (
      <div>
        <ProjectsNav currentProject={this.state.title}/>
        <AllProjects showTitle={this.displayTitle}/>
        {/* {this.props.children} */}
        <ProjectsFooter/>
      </div>
    )
  }
});

module.exports = Projects;
