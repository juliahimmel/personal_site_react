var React = require('react');
var {Link} = require('react-router');

var Project = React.createClass({
  handleClick: function () {
    this.props.onTitleSet(this.props.title);
  },
  render: function () {
    var {id, tags, title, subtitle, shortDescription, images} = this.props;

    var renderTags = () => {
      return tags.map((tag, i) => {
        return (
          <p key={i} className="tag">{tag}</p>
        )
      })
    };

    return (
      <div className="project-small">
        <Link style={{background: 'url("' + images[0] + '") no-repeat center'}} className="image-link" to={ {pathname: `/projects/${id}`}}/>
        <div className="tags">
          {renderTags()}
        </div>
        <h4 className="title">{title}</h4>
        <h5 className="subtitle">{subtitle}</h5>
        <p className="short-description">{shortDescription}</p>
      </div>
    )
  }
})

module.exports = Project;
