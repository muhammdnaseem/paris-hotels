import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/herosection.css';
import { Slideout } from './SideBar';



const HeroSection = (props) => {
  return (
    <section id="hero" className="d-flex align-items-center">
       <video autoPlay muted loop id="video-background">
        <source src={props.videosrc} type="video/mp4" />
  
       </video>
       <img src={props.imagesrc} id="video-background"/>
       <div className="hero-section-content">
       <h6>
       {props.pagedescription}
       
       </h6>
       <h2>
       {props.pagetitle}
       </h2>
      </div>
    </section>
  );
};

export default HeroSection;
