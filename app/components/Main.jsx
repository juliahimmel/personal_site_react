var React = require('react');
var AllProjects = require('AllProjects');

var Main = React.createClass({

  render: function() {

    return (
      <div>
        {this.props.children}
      </div>
    );
  }

})

module.exports = Main;
