var React = require('react');
var Project = require('Project');

var AllProjects = React.createClass({
  render: function () {
    var {projects} = this.props;
    var renderProjects = () => {
      return projects.map((project) => {
        return (
          <Project key={project.id} {...project} />
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
