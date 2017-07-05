var React = require('react');
var Project = require('Project');
var OneProject = require('OneProject');
var projects = require('app/data/projects.js');

var AllProjects = React.createClass({
  setTitle: function (title) {
    this.props.showTitle(title);
  },

  render: function () {

    var projectsArray = projects.default.projects;
    var renderProjects = () => {
      return projectsArray.map((project) => {
        return (
          <div>
            <Project key={project.id} {...project} onTitleSet={this.setTitle}/>
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
