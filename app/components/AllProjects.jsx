var React = require('react');
var Project = require('Project');
var OneProject = require('OneProject');

var AllProjects = React.createClass({
  render: function () {
    var {projects} = this.props;
    var renderProjects = () => {
      return projects.map((project) => {
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
        {this.props.children}
      </div>
    )
  }
});

module.exports = AllProjects;
