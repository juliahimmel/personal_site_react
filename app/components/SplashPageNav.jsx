var React = require('react');

var {Link} = require('react-router');

var SplashPageNav = React.createClass({
  render: function () {
    return (
      <div className="splash-page-nav">
        <ul>
          <li><a href='https://instagram.com' target="_blank">LinkedIn</a></li>
          <li><a href='https://instagram.com' target="_blank">Instagram</a></li>
          <li><a href='https://s3.amazonaws.com/julia-himmel-personal-site/julia_himmel_resume_may_2017.pdf' target="_blank">Download Resume</a></li>
          <li><Link to='/projects'>Projects<span className="zapf_arrow"> &#x2192;</span></Link></li>
        </ul>
      </div>
    )
  }
});

module.exports = SplashPageNav;
