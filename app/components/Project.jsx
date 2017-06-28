var React = require('react');
var {Route, Router, IndexRoute, hashHistory, Link} = require('react-router');

var Project = React.createClass({
  render: function () {
    var {id, title} = this.props;
    return (
      <div>
        {id}
        {title}
        <Link to={ {pathname: `/projects/${id}`, hash: this.props} } >TestLink</Link>
      </div>
    )
  }
})

module.exports = Project;

// {"history":{},"location":{"pathname":"/projects/2","search":"","hash":"","state":null,"action":"POP","key":"pg6y26","query":{},"$searchBase":{"search":"","searchBase":""}},"params":{"id":"2"},"route":{"path":"/projects/:id"},"routeParams":{"id":"2"},"routes":[{"path":"/projects/:id"}],"children":null}
