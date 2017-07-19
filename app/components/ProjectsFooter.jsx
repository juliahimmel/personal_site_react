var React = require('react');
var {Link} = require('react-router');

var ProjectsFooter = React.createClass({
  render: function () {
    return (
      <div className="projects-footer">
        <ul>
          <li><a href='https://instagram.com'>LinkedIn</a></li>
          <li><a href='https://instagram.com'>Instagram</a></li>
          <li><a href='https://instagram.com'>Download Resume</a></li>
          <li><Link to='/projects'>Projects</Link></li>
        </ul>
      </div>
    )
  }
})

module.exports = ProjectsFooter;
