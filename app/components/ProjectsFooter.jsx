var React = require('react');

var {Route, Router, IndexRoute, hashHistory, Link} = require('react-router');

var ProjectsFooter = React.createClass({
  render: function () {
    return (
      <div>
        <ul>
          <li><a href='https://instagram.com'>Instagram</a></li>
        </ul>
      </div>
    )
  }
})

module.exports = ProjectsFooter;
