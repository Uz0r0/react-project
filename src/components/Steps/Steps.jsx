import React from 'react';
import './Steps.css';

const Steps = ({ icon, number, description, width = 240, height = 'auto' }) => {
  return (
    <div
      className="steps"
      style={{ width: `${width}px`, height: height !== 'auto' ? `${height}px` : 'auto' }}
    >
      <img src={icon} alt="" className="steps-icon" />
      <p>{description}</p>
      <img src={number} alt="" className="number" />
    </div>
  );
};

export default Steps;