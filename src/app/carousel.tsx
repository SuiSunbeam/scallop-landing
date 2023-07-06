import React, { FC } from 'react';
import { CarouselData } from './utils';
import Slider from 'react-slick';

type SlideProps = {
  item: CarouselData;
};

type CarouselProps = {
  items: CarouselData[];
};

const Slide: FC<SlideProps> = ({ item }) => {
  return (
    <div className="slide-item">
      <div className="slide-item-logo">
        <img src={item.logo.source} alt={item.logo.alt} />
      </div>
      <p className="slide-item-message">{item.message}</p>
      <div className="slide-item-profile">
        <img src={item.profile.image} alt={item.profile.title} />
        <div>
          <h4 className="title">{item.profile.title}</h4>
          <h4 className="subtitle">{item.profile.subtitle}</h4>
        </div>
      </div>
    </div>
  );
};

const Carousel: FC<CarouselProps> = ({ items }) => {
  const sliderSetting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="slide-container">
      <Slider {...sliderSetting} className="slide">
        {items.map((item, index) => {
          return <Slide item={item} key={index} />;
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
