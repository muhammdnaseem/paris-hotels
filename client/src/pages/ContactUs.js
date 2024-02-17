import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Accordion from '../components/Accordion';
import Footer from '../components/Footer';

function ContactUs() {

  return (
   
      <div>
      <TopBar /> 
      <Header />
         <HeroSection 
        pagetitle = "Contact Us"
        />
<div className="row">
<div className="col-sm-6">

 <Accordion />

     </div>
      </div> 
            <Footer />
      </div>
     
    
  );
}

export default ContactUs;
