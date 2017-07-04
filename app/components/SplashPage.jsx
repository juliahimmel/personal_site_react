var React = require('react');
var SplashPageNav = require('SplashPageNav')

var SplashPage = React.createClass({
  render: function () {
    return (
      <div>
        <h2>This is the splash page</h2>
        <SplashPageNav/>
      </div>
    )
  }

})

module.exports = SplashPage;
