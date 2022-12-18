import React, { useState } from 'react';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';
import sliderImg1 from '../../assets/img/sliderImg1.jpg';

export const Slider = ({ data }) => {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    dotsClass: 'slickDots',
    customPaging: i => <button className='dotItem'></button>,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      // {
      //   breakpoint: 600,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //     initialSlide: 2,
      //   },
      // },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: sliderImg1,
    }));
  };

  return (
    <div className='slider'>
      <SlickSlider {...settings}>
        {data.map((i) => (
          <div key={i.id} className='slideItem'>
            <img className='img' src={i.imgLink} onError={handleErrorImage} alt="Slider Img" />
          </div>
        ))}
      </SlickSlider>
    </div>
  );
};
