import React from 'react';
import card1Img from '../../Images/card4.png';
import './card4.css';

const Card4 = ({ title, content, imageUrl }) => {
  return (
    <div className="card">
      <div className="card-image-container">
        {imageUrl && <img src={card1Img} alt="Card" className="card-image" />}
        <h3 className="card-title">{title}</h3>
      </div>
      <p className="card-content">{content}</p>
    </div>
  );
};

export default Card4;
