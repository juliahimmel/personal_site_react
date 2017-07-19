var React = require('react');

var Tags = React.createClass({
  render: function () {

    var renderTags = (tags) => {
      var tags = this.props.tags;

      return tags.map((tag, i) => {
        return (
          <p key={i} className="tag">{tag}</p>
        )
      })
    };

    return (
      <div className="tags">
        {renderTags()}
      </div>
    )

  }
})

module.exports = Tags;
