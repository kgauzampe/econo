import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';

import image1 from '../../Images/Carousel1.png';
import image2 from '../../Images/Carousel2.png';
import image3 from '../../Images/Carousel3.png';
import image4 from '../../Images/Carousel4.png'; 

function Carousel1() {
  return (
    <div className="App-Carousel">
      <Carousel interval={3000} autoPlay={true} infiniteLoop={true}  showThumbs={false}>
        <div>
          <img src={image1} alt="Image 1" />
        </div>
        <div>
          <img src={image2} alt="Image 2" />
        </div>
        <div>
          <img src={image3} alt="Image 3" />
        </div>
        <div>
          <img src={image4} alt="Image 3" />
        </div>
      </Carousel>
    </div>
  );
}

export default Carousel1;
