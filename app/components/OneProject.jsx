var React = require('react');
var projects = require('app/data/projects.js');

const OneProject = (props) => {
  var projectId = parseInt(props.params.id);
  var {id, title} = projects.default.projects[projectId];
  return (
    <div>
      <h1>Hello</h1>
      <h3>props: {JSON.stringify(props)}</h3>
      <h3>ID: {JSON.stringify(props.params.id)}</h3>
      <h4>{title}</h4>
      {/* <h3>ID: {projects.default.projects[]}</h3> */}
    </div>
  )
}

module.exports = OneProject;
