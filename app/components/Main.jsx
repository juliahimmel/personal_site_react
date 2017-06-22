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
        },
        {
          id: 2,
          title: 'Second Project',
          subtitle: 'Some subtitle two',
          shortDescription: 'A Short Description two',
          longDescription: 'A Long Description two',
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
