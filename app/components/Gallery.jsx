var React = require('react');

var Gallery = React.createClass({
  render: function () {

    var renderImages = (tags) => {
      var images = this.props.images;

      return images.map((imageLink, i) => {
        return (
          <li key={i} >
            <img src={imageLink} className="gallery-image"/>
          </li>
        )
      })
    };

    return (
      <ul className="gallery-images">
        {renderImages()}
      </ul>
    )

  }
})

module.exports = Gallery;
