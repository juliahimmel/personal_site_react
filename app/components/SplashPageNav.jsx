var React = require('react');

var {Link} = require('react-router');

var SplashPageNav = React.createClass({
  render: function () {
    return (
      <div className="splash-page-nav">
        <ul>
          <li><a href='https://instagram.com'>LinkedIn</a></li>
          <li><a href='https://instagram.com'>Instagram</a></li>
          <li><a href='https://instagram.com'>Download Resume</a></li>
          <li><Link to='/projects'>Projects<span className="zapf_arrow"> &#x2192;</span></Link></li>
        </ul>
      </div>
    )
  }
});

module.exports = SplashPageNav;
