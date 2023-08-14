import React from 'react';
import './Banner.css';
import logo from './blog.jpeg'

const Banner = ({ text }) => {
  return (
    <div className="banner">
        <div className='inner-box-left'>
            <h1>Revolutionize Your Thoughts</h1>
            <h2>Explore New Horizons</h2>
           
        </div>
        <div className='inner-box-right'>
            <img className='imageit' src={logo} alt='image'/>
            <h2>Pen Down Your Thinking!</h2>
        </div>
      
    </div>
  );
};

export default Banner;
