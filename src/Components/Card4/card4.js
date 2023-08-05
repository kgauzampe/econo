import React from 'react';
import card1Img from '../../Images/card4.png'
import './card4.css'; // Import the external CSS file

const Card1 = ({ title, content, imageUrl }) => {
  return (
    <div className="card">
      {imageUrl && <img src={card1Img} alt="Card" className="card-image" />}
      <h3 className="card-title">{title}</h3>
      <p className="card-content">{content}</p>
    </div>
  );
};

export default Card1;
