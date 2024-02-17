import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../css/multislidercomponent.css";
import Button from '../components/Button';
import MainHeading from '../components/Headings';
import { Link } from 'react-router-dom';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 2
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const MultiSliderComponent = ({ slides, slidertitle, sliderdescription, sliderlinktext, sliderlink , bookinglink }) => {
  return (
    <div className="parent">
     <div className="col-sm-12 multi-slider-main-content">
        <MainHeading Text={slidertitle} className="main-heading" />
      <p>
      
        {sliderdescription}
         <br />
         
         <Link className="link-style" to={sliderlink}>
           <Button id="boot-table" className="white-colored-button" text={sliderlinktext} iconClass="fa-print d-none" />
         
       </Link>
      </p>
      </div>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {slides.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={imageUrl.url} className="slider-image" alt="movie" />
              <div className="multi-slider-content">
              <div className="row">
              <div className="col-8">
              <h6> {imageUrl.name} </h6>
               <h3> {imageUrl.title} </h3>
               </div>
               <div className="col-2">
              <Link to={imageUrl.bookinglink}>
               <Button id="boot-table" className="white-colored-button" text="Book" iconClass="fa-print d-none" />
               
                </Link>
                </div>
                </div>
              </div>
              
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default MultiSliderComponent;
