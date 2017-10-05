var React = require('react');


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

      </div>
    )

  }
})

module.exports = Gallery;
