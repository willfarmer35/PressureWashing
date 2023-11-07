import React from 'react';
import '../App.css';
import {Button}  from './Button';
import { Link } from 'react-router-dom';
import './HeroSection.css';

export function HeroSection() {
  return (
    <div className='hero-container'>
      
      
      <video src='/videos/IMG_4879.mov' autoPlay loop muted />
     
      <h1>Will's Cleaning Services</h1>
      <p>Serving Issaquah and the Greater Seattle Area since 2017</p>
      <div className='hero-btns' >
      <Link to ='/services' className='servicelinks' >
                                        Services
                                    </Link>
     
      </div>
        </div>
      
    
  );
}

export default HeroSection;