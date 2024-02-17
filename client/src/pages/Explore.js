import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';


function Explore() {
  return (
   
      <div >
      <TopBar /> 
      <Header />
         <HeroSection 
        pagetitle = "Explore"
        />
     
       
      </div>
    
  );
}

export default Explore;
