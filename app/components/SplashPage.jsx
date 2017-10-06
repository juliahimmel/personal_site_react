var React = require('react');
var SplashPageNav = require('SplashPageNav')

var SplashPage = React.createClass({
  render: function () {
    return (
      <div className="splash-page">
        <div className="splash-text-wrapper">
          <h1>Julia Himmel</h1>
          <p className="intro-text">Designer pairing a strong typographic sensibility and deep understanding of brand and identity systems with a steadfast commitment to user-centered design. My experience developing for the web helps inform my design practice.</p>
        </div>
        <SplashPageNav/>
      </div>
    )
  }

})

module.exports = SplashPage;
