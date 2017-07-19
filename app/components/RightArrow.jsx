var React = require('react');

const RightArrow = (props) => {
  return (
    <div><a className='right-arrow' onClick={() => {props.onClick('right')}}>&rsaquo;</a></div>
  );
}

module.exports = RightArrow;
