var React = require('react');
var Tags = require('Tags');
var Gallery = require('Gallery');
var projects = require('app/data/projects.js');

var OneProject = React.createClass({
  handleClick: function (direction) {
    let galleryDiv = document.getElementById('gallery');
    var scrollAmount = 0;
    var slideTimer = setInterval(function(){
      if (direction === 'right') {
        galleryDiv.scrollLeft += 10;
      }
      else {
        galleryDiv.scrollLeft -= 10;
      };
      scrollAmount += 10;
      if(scrollAmount >= 100){
          window.clearInterval(slideTimer);
      }
    },15);
  },
  render: function () {
    var projectId = parseInt(this.props.params.id);
    var {id, tags, title, subtitle, shortDescription, longDescription, images} = projects.default.projects[projectId];

    return (
      <div className="one-project">
        <div className="proj-description">
          <Tags tags={tags}/>
          <h2 className="title">{title}</h2>
          <h3 className="subtitle">{subtitle}</h3>
          <h4 className="long-description">{longDescription}</h4>
        </div>
        <Gallery images={images} onClick={this.handleClick}/>
      </div>
    )
  }
});

// (props) => {
//   var projectId = parseInt(props.params.id);
//   var {id, tags, title, subtitle, shortDescription, longDescription, images} = projects.default.projects[projectId];
//
//   var handleClick = (direction) => {
//     let galleryDiv = document.getElementById('gallery');
//     var scrollAmount = 0;
//     var slideTimer = setInterval(function(){
//       if (direction === 'right') {
//         galleryDiv.scrollLeft += 10;
//       }
//       else {
//         galleryDiv.scrollLeft -= 10;
//       };
//       scrollAmount += 10;
//       if(scrollAmount >= 100){
//           window.clearInterval(slideTimer);
//       }
//     },15);
//   };
//
//   return (
//     <div className="one-project">
//       <Tags tags={tags}/>
//       <h2 className="title">{title}</h2>
//       <h3 className="subtitle">{subtitle}</h3>
//       <h4 className="long-description">{longDescription}</h4>
//       <Gallery images={images} onClick={this.handleClick}/>
//     </div>
//   )
// }

module.exports = OneProject;
