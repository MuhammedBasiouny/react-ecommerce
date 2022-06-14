import React from 'react';
import NavBarLogin from '../../components/utils/NavBarLogin';
import Slider from '../../components/home/Slider';

function HomePage() {
  return (
    <div className='font'>
      <NavBarLogin />
      <Slider />
    </div>
  );
}

export default HomePage;
