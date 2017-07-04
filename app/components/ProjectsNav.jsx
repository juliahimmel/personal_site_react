var React = require('react');
var {Link, IndexLink} = require('react-router');

var ProjectsNav = React.createClass({
  render: function () {

    return (
      <div>
        <h2>Projects Nav</h2>
        <ul>
          <li><IndexLink to='/'>Julia Himmel</IndexLink></li>
          <li><Link to='/projects'>Projects</Link></li>
        </ul>
      </div>
    )
  }
});

module.exports = ProjectsNav;
