import React from 'react';
import { Link } from 'react-router-dom';
import Card3 from '../Card3/card3';

const Serv3Card = () => {
  return (
    <Link to="/Service3" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card3
        title="IT Consultancy"
        imageUrl="path_to_image.jpg"
      />
    </Link>
  );
};

export default Serv3Card;
