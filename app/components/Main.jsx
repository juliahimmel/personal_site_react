var React = require('react');
var AllProjects = require('AllProjects');

var Main = React.createClass({
  getInitialState: function () {
    return {
      projects: [
        {
          id: 1,
          title: 'Tattle App',
          subtitle: 'Some subtitle',
          shortDescription: 'A Short Description',
          longDescription: 'A Long Description',
          images: []
        }
      ]
    };
  },
  render: function() {
    var {projects} = this.state;
    return (
      <div>
        <AllProjects projects={projects} />
      </div>
    );
  }

})

module.exports = Main;
