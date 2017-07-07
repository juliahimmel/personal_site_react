var React = require('react');
var SplashPageNav = require('SplashPageNav')

var SplashPage = React.createClass({
  render: function () {
    return (
      <div className="splash-page">
        <div className="splash-text-wrapper">
          <h1>Julia Himmel</h1>
          <p className="intro-text">Designer and developer pairing a strong typographic sensibility and deep understanding of brand and identity systems with a steadfast commitment to user-centered design. Experienced in all aspects of the digital production/software development cycle.</p>
        </div>
        <SplashPageNav/>
      </div>
    )
  }

})

module.exports = SplashPage;
