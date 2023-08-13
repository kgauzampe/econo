import React from 'react';
import card1Img from '../../Images/card2.png';
import './card2.css';

const Card2 = ({ title, content, imageUrl }) => {
  return (
    <div className="card">
      <div className="card-image-container">
        {imageUrl && <img src={card1Img} alt="Card" className="card-image" />}
        <h3 className="card-title2">{title}</h3>
      </div>
      <p className="card-content">{content}</p>
    </div>
  );
};

export default Card2;
