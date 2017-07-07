var React = require('react');

var Main = React.createClass({

  render: function() {
    var props = this.props;

    return (
      <div>
        {this.props.children}
      </div>
    );
  }

})

module.exports = Main;
