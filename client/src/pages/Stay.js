import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import MainHeading from '../components/Headings';
import GalleryCategory from '../components/GalleryCategory';
import { Link } from 'react-router-dom';

function Stay() {
  return (
   
      <div >
      <TopBar /> 
      <Header />
           <HeroSection 
        imagesrc="https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-suite-terrace-suite-bedroom?wid=2400&hei=1350&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0"
        pagetitle = "Stay"
        />

          <MainHeading Text="135 elegant rooms and suites including seven duplex suites, many with private balconies and terraces, 
          offer an array of accommodation for couples, families, friends and business travellers alike." className="main-page-heading" />
        
 <div className="row gallery-section">
      <div className="col-sm-12 d-flex">
        <MainHeading Text="Stay" className="main-heading" />
        <Link className="link-style">
       View all rooms and suites  <i class="fa fa-chevron-right"></i>
       </Link>
      </div>
      <div className="col-sm-12 mb-5">
      <GalleryCategory />

      </div>
      </div>
   <Footer />
       
      </div>
    
  );
}

export default Stay;
