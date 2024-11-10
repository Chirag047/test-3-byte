import React from 'react';
import './CircleButton.css';
import buttonImage from '../loc.png';

const CircleButton = ({ onClick }) => {
  return (
    <button className="circle-btn" onClick={onClick}>
      <div className="circle-inner">
        <img src={buttonImage} alt="Open location modal" className="circle-btn-img" />
      </div>
      <span className="circle-border"></span>
    </button>
  );
};

export default CircleButton;
