import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'; // You can create this CSS file for carousel styles
import CardCar from './Card1'; // Import your card component

const CardCarousel = () => {
  const cardData = [
    {
      title: 'Card 1',
      content: 'This is the content of Card 1',
      imageUrl: '...',
    },
    // Add more card data here
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <div key={index}>
            <Card1 title={card.title} content={card.content} imageUrl={card.imageUrl} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardCarousel;
