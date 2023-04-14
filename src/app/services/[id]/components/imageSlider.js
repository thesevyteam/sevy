'use client';

import Image from 'next/image';
import { useState } from 'react';
import Slider from 'react-slick';

function ImageSlider({ images }) {
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
    <Slider
      {...sliderSettings}
      className="bg-white rounded-md lg:rounded-md lg:shadow-md"
    >
      {images.map((image, index) => (
        <div key={index} className="h-45vh lg:h-50vh overflow-hidden">
          <Image
            src={image}
            alt={`Service image ${index + 1}`}
            fill
            style={{ objectFit: 'contain' }}
            className="rounded-md"
          />
        </div>
      ))}
    </Slider>
  );
}

export default ImageSlider;
