var React = require('react');
var {Link} = require('react-router');

var ProjectsFooter = React.createClass({
  render: function () {
    return (
      <div className="projects-footer">
        <ul>
          <li><a href='https://www.linkedin.com/in/julia-himmel-a785087/' target="_blank">LinkedIn</a></li>
          <li><a href='https://www.instagram.com/himmeljulia/' target="_blank">Instagram</a></li>
          <li><a href='https://s3.amazonaws.com/julia-himmel-personal-site/julia_himmel_resume_oct_2017.pdf' target="_blank">Download Resume</a></li>
          <li><Link to='/projects'>Projects</Link></li>
        </ul>
      </div>
    )
  }
})

module.exports = ProjectsFooter;
