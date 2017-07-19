var React = require('react');
var Tags = require('Tags');
var Gallery = require('Gallery');
var projects = require('app/data/projects.js');

const OneProject = (props) => {
  var projectId = parseInt(props.params.id);
  var {id, tags, title, subtitle, shortDescription, longDescription, images} = projects.default.projects[projectId];
  return (
    <div className="one-project">
      <Tags tags={tags}/>
      <h2 className="title">{title}</h2>
      <h3 className="subtitle">{subtitle}</h3>
      <h4 className="long-description">{longDescription}</h4>
      <Gallery images={images}/>
    </div>
  )
}

module.exports = OneProject;
