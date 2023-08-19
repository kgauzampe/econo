import React from 'react';
import { Link } from 'react-router-dom';
import Card4 from '../Card4/card4'; 

const Serv4Card = () => {
  return (
    <Link to="/Service4" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card4
        title="Software QA Consultancy"
        imageUrl="path_to_image.jpg"
      />
    </Link>
  );
};

export default Serv4Card;
