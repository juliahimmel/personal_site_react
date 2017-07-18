var React = require('react');
var {Link, IndexLink} = require('react-router');
var projects = require('app/data/projects.js');

var ProjectsNav = React.createClass({

  render: function () {

    var projectsArray = projects.default.projects;
    var renderProjectLinks = function () {
      return projectsArray.map((project, i) => {
        return (
          <li key={i}><Link className="one-project-link" to={ {pathname: `/projects/${project.id}`}} activeClassName="active" >{project.title}</Link></li>
        )
      })
    };

    return (
      <ul className="projects-nav">
        <li><IndexLink className="index-link" to='/'>Julia Himmel</IndexLink></li>
        <li><Link className="projects-link" to='/projects'>Projects</Link></li>
        {renderProjectLinks()}
      </ul>
    )
  }
});

module.exports = ProjectsNav;
