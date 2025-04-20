import React from 'react';
import './CatCard.css';
import arrow from '../../assets/images/arrow.png';

const CatCard = ({ icon, title, description, catalogLabel, catalogLink, titleWidth = 400 }) => {
  return (
    <div className="cat-card">
      <div className="CatCard-info">
        <div className="title" style={{ width: `${titleWidth}px` }}>
          <img src={icon} alt="" className="icon" />
          <h3>{title}</h3>
        </div>
        <p>{description}</p>
        <a href={catalogLink} className="carda">
          {catalogLabel} <img src={arrow} alt="" />
        </a>
      </div>
    </div>
  );
};

export default CatCard;

