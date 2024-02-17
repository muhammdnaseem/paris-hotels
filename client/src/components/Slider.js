import React, { useState } from 'react';
import '../css/slider.css'; // Import your CSS file for styling

const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="slider-container">
      <div className="slides">
        {slides.map((slide, index) => (
          <div
            className={index === currentSlide ? 'slide active' : 'slide'}
            key={slide.id}
          >
            <img src={slide.imageUrl} alt={`Slide ${slide.id}`} />
           <div className={`slide-content ${slide.content}`}>
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="prev-button sliderbuttons">
        Previous
      </button>
      <button onClick={nextSlide} className="next-button sliderbuttons">
       <i class="fa fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Slider;
