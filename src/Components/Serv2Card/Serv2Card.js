import React from 'react';
import { Link } from 'react-router-dom';
import Card2 from '../Card2/card2';

const Serv2Card = () => {
  return (
    <Link to="/Service1" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card2
        title="Software QA Training"
        imageUrl="path_to_image.jpg"
      />
    </Link>
  );
};

export default Serv2Card;
