import React from 'react';
import Suggestions from './Suggestions';
import {Link} from 'react-router-dom';
import "../css/index.css";

const Home = () => {
    return (
      <div className='header-content flex flex-c text-center text-white'>
      <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
      <p className='header-text fs-18 fw-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae sapiente quibusdam consequatur perspiciatis facere laboriosam non nesciunt at id repudiandae, modi iste? Eligendi, rerum!</p>
  </div>
    )
  }

export default Home