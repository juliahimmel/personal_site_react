var React = require('react');
var {Link} = require('react-router');

var ProjectsFooter = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Projects Footer</h2>
        <ul>
          <li><Link to='/projects'>Projects</Link></li>
          <li><a href='https://instagram.com'>Instagram</a></li>
        </ul>
      </div>
    )
  }
})

module.exports = ProjectsFooter;
