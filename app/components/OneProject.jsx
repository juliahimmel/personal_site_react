var React = require('react');

// var OneProject = React.createClass({
//   render: function () {
//     // var {id, title} = this.props;
//     return (
//       <div>
//         {id}
//         {title}
//       </div>
//     )
//   }
// })

const OneProject = (props) => (
  <div>
    <h3>ID: {JSON.stringify(props)}</h3>
  </div>
)

// const Player = (props) => {
//   const player = PlayerAPI.get(
//     parseInt(props.match.params.number, 10)
//   )
//   if (!player) {
//     return <div>Sorry, but the player was not found</div>
//   }
//   return (
//     <div>
//       <h1>{player.name} (#{player.number})</h1>
//       <h2>{player.position}</h2>
//     </div>
// )

module.exports = OneProject;
