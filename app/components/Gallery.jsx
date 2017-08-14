var React = require('react');
var RightArrow = require('RightArrow');
var LeftArrow = require('LeftArrow');

var Gallery = React.createClass({
  render: function () {

    var renderImages = (tags) => {
      var images = this.props.images;
      window.scrollTo( 0, 0 );

      return images.map((imageLink, i) => {
        return (
          <li key={i} >
            <img src={imageLink} className="gallery-image"/>
          </li>
        )
      })
    };

    return (
      <div className="gallery-container">
        <ul className="gallery-images" id="gallery">
          {renderImages()}
        </ul>
        <div className="arrows">
          <RightArrow onClick={this.props.onClick}/>
          <LeftArrow onClick={this.props.onClick}/>
        </div>
      </div>
    )

  }
})

module.exports = Gallery;
