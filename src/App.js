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
import AdminAllProductsPage from './pages/admin/AdminAllProductsPage';
import AdminAllOrdersPage from './pages/admin/AdminAllOrdersPage';
import AdminOrderDetalisPage from './pages/admin/AdminOrderDetalisPage';
import AdminAddBrandPage from './pages/admin/AdminAddBrandPage';
import AdminAddCategoryPage from './pages/admin/AdminAddCategoryPage';
import AdminAddSubCategoryPage from './pages/admin/AdminAddSubCategoryPage';
import AdminAddProductsPage from './pages/admin/AdminAddProductsPage';

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
          <Route path='/admin/allproducts' element={<AdminAllProductsPage />} />
          <Route path='/admin/allorders' element={<AdminAllOrdersPage />} />
          <Route path='/admin/orders/:id' element={<AdminOrderDetalisPage />} />
          <Route path='/admin/addbrand' element={<AdminAddBrandPage />} />
          <Route path='/admin/addcategory' element={<AdminAddCategoryPage />} />
          <Route path='/admin/addsubcategory' element={<AdminAddSubCategoryPage />} />
          <Route path='/admin/addproduct' element={<AdminAddProductsPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
