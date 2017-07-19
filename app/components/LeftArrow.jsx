var React = require('react');

const RightArrow = (props) => {
  return (
    <div><a className='right-arrow' onClick={() => {props.onClick('left')}}>&lsaquo;</a></div>
  );
}

module.exports = RightArrow;
