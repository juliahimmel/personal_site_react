var React = require('react');
var Project = require('Project');
var OneProject = require('OneProject');
var projects = require('app/data/projects.js');

var AllProjects = React.createClass({
  render: function () {

    var projectsArray = projects.default.projects;
    var renderProjects = () => {
      return projectsArray.map((project) => {
        return (
          <div>
            <Project key={project.id} {...project} />
          </div>
        )
      })
    };

    return (
      <div>
        {renderProjects()}
      </div>
    )
  }
});

module.exports = AllProjects;
