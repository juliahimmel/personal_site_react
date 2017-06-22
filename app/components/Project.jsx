var React = require('react');

var Project = React.createClass({
  render: function () {
    var {id, title} = this.props;
    return (
      <div>
        {id}
        {title}
      </div>
    )
  }
})

module.exports = Project;
