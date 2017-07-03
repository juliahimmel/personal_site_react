var React = require('react');
var {Route, Router, IndexRoute, hashHistory, Link} = require('react-router');

var Project = React.createClass({
  render: function () {
    var {id, title} = this.props;
    return (
      <div>
        {id}
        {title}
        <Link to={ {pathname: `/projects/${id}`} } >TestLink</Link>
      </div>
    )
  }
})

module.exports = Project;
