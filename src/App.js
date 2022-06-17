import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/utils/Footer';
import NavBarLogin from './components/utils/NavBarLogin';
import HomePage from './pages/home/HomePage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import AllCategoryPage from './pages/category/AllCategoryPage';
import AllBrandPage from './pages/brand/AllBrandPage';
import ShopProductPage from './pages/products/ShopProductPage';
import ProductDetailsPage from './pages/products/ProductDetailsPage';
import CartPage from './pages/cart/CartPage';
import ChoosePayMethodPage from './pages/checkout/ChoosePayMethodPage';

function App() {
  return (
    <div className='font'>
      <NavBarLogin />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/allcategory' element={<AllCategoryPage />} />
          <Route path='/allbrand' element={<AllBrandPage />} />
          <Route path='/products' element={<ShopProductPage />} />
          <Route path='/products/:id' element={<ProductDetailsPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/order/paymethod' element={<ChoosePayMethodPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
