var React = require('react');
var {Link, IndexLink} = require('react-router');
var projects = require('app/data/projects.js');

var ProjectsNav = React.createClass({

  render: function () {

    var projectsArray = projects.default.projects;
    var renderProjectLinks = function () {
      return projectsArray.map((project) => {
        return (
          <Link to={ {pathname: `/projects/${project.id}`}} activeClassName="active" activeStyle={{fontWeight: 'bold'}}>{project.title}</Link>
        )
      })
    };

    return (
      <div>
        <h2>Projects Nav</h2>
        <IndexLink to='/'>Julia Himmel</IndexLink>
        <Link to='/projects'>Projects</Link>
        {renderProjectLinks()}
      </div>
    )
  }
});

module.exports = ProjectsNav;
