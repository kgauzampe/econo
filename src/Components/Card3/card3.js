import React from 'react';
import card1Img from '../../Images/card3.png';
import './card3.css';

const Card3 = ({ title, content, imageUrl }) => {
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

export default Card3;
