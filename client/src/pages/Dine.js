import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';


function Dine() {
  return (
   
      <div >
      <TopBar /> 
      <Header />
                <HeroSection 
        pagetitle = "Dine"
        />
       
       
      </div>
    
  );
}

export default Dine;
