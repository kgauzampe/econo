import React from 'react';
import { Link } from 'react-router-dom';
import Card3 from '../Card3/card3';

const Serv3Card = () => {
  return (
    <Link to="/Service1" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card3
        title="Software QA Training"
        imageUrl="path_to_image.jpg"
      />
    </Link>
  );
};

export default Serv3Card;
