var React = require('react');
var {Route, Router, IndexRoute, hashHistory, Link, browserHistory} = require('react-router');


var ProjectsNav = React.createClass({
  render: function () {

    return (
      <div>
        <h2>Projects Nav</h2>
        <ul>
          <li><Link to='/projects'>Projects</Link></li>
        </ul>
      </div>
    )
  }
});

module.exports = ProjectsNav;
