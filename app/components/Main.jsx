var React = require('react');

var Main = React.createClass({

  render: function() {
    var props = this.props;

    return (
      <div>
        <h1>Hello there, this is Main</h1>
        {this.props.children}
      </div>
    );
  }

})

module.exports = Main;
