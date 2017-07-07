var React = require('react');

var {Link} = require('react-router');

var SplashPageNav = React.createClass({
  render: function () {
    return (
      <div className="splash-page-nav">
        <ul>
          <li><Link to='/projects'>Projects</Link></li>
          <li><a href='https://instagram.com'>Instagram</a></li>
        </ul>
      </div>
    )
  }
});

module.exports = SplashPageNav;
