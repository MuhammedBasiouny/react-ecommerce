import React from 'react';
import NavBarLogin from '../../components/utils/NavBarLogin';
import Slider from '../../components/home/Slider';
import HomeCategory from '../../components/home/HomeCategory';
import CardProductsContainer from '../../components/products/CardProductsContainer';
import DiscountSection from '../../components/home/DiscountSection';
import BrandFeatured from '../../components/brand/BrandFeatured';
import Footer from '../../components/utils/Footer';

function HomePage() {
  return (
    <div className='font' style={{ minHeight: '670px' }}>
      <NavBarLogin />
      <Slider />
      <HomeCategory />
      <CardProductsContainer title='الاكثر مبيعا' btntitle='المزيد' />
      <DiscountSection />
      <CardProductsContainer title='أحدث الازياء' btntitle='المزيد' />
      <BrandFeatured title='اشهر الماركات' btntitle='المزيد' />
      <Footer />
    </div>
  );
}

export default HomePage;
