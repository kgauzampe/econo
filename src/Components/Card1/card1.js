import React from 'react';
import card1Img from '../../Images/card1.png';
import './card1.css'; // Import the external CSS file

const Card1 = ({ title, content, imageUrl }) => {
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

export default Card1;
