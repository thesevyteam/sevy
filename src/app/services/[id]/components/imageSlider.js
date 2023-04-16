'use client';

import Image from 'next/image';
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const ImageSlider = ({ images }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    afterChange: (current) => setActiveSlide(current),
    customPaging: (i) => (
      <div className={`slider-dot ${activeSlide === i ? 'active' : ''}`}></div>
    ),
  };

  return (
    <div className="w-full">
      <Slider {...sliderSettings}>
        {images.map((image, index) => (
          <div
            key={index}
            className="h-45vh lg:h-50vh relative bg-white lg:shadow-md lg:rounded-md overflow-hidden"
          >
            <Image
              src={image}
              alt={`Service image ${index + 1}`}
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                backgroundColor: '#40916c',
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
