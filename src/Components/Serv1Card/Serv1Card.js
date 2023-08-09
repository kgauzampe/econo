import React from 'react';
import { Link } from 'react-router-dom';
import Card1 from '../Card1/card1'; // Assuming you have your Card1 component

const Serv1Card = () => {
  return (
    <Link className='Serv1' to="/Service1" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card1
        title="Software QA Training"
        // content="This is the content of the card. You can add more details here."
        imageUrl="path_to_image.jpg"
      />
    </Link>
  );
};

export default Serv1Card;
