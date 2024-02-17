import { Carousel } from 'react-bootstrap';
import {useState} from 'react';
import ExampleCarouselImage from '../img/about.jpg';
import '../css/SliderComponent.css';
import Button from '../components/Button';
import MainHeading from '../components/Headings';
import { Link } from 'react-router-dom';


function SliderComponent({ slides, children, size, buttonclass, slidertitle, sliderlinktext, sliderlink, sliderdescription, contentclass }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="slider-container">
     <div className={`col-12 d-flex ${contentclass}`}>
        <MainHeading Text={slidertitle} className="main-heading" />
      <p>
{sliderdescription}
         <br />
     {/*    <Link className="link-style" to={sliderlink}>
{sliderlinktext}
     <i class="fa fa-chevron-right"></i>
       </Link>
       */}
      </p>
      </div>

      <div className="slides">
        {slides.map((slide, index) => (
          <div
            className={index === currentSlide ? 'slide active' : 'slide'}
            key={slide.id}
          >
            <img src={slide.imageUrl} alt={`Slide ${slide.id}`} class={size}/>





   <div className="slide-content">
              <div className="row">
              <div className="col-8">
              <h6> {slide.imageUrl.name} </h6>
               <h3> {slide.imageUrl.title} </h3>
               </div>
               <div className="col-2">
              <Link to={slide.imageUrl.bookinglink}>
               <Button id="boot-table" className="white-colored-button" text="Book" iconClass="fa-print d-none" />
               
                </Link>
                </div>
                </div>
              </div>





            <div className="slide-content row d-flex">
<div className="col-sm-6">
              <h3>{slide.title}</h3>
  </div>
  <div className="col-sm-6">
              <p>{slide.description}</p>
</div>
            </div>
<div className="slide-childern-content row">
  <div className="col-sm-6">
  <h4>
{slide.name}
</h4>
<br />
<h1>
{slide.content}
</h1>
  </div>
<div className="col-sm-6 text-right">
<Link to={slide.seemorelink}>
  <Button id="boot-table" className={`white-colored-button  ${buttonclass}`} text="See More" iconClass="fa-print d-none" />
  </Link>
</div>



 
</div>
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="prev-button button">
         <i class="fa fa-chevron-left"></i>
      </button>
      <button onClick={nextSlide} className="next-button button">
         <i class="fa fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default SliderComponent;
