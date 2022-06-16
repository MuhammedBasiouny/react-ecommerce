import React from 'react';
import CategoryHeader from '../../components/category/CategoryHeader';
import { Container } from 'react-bootstrap';
import ProductDetails from './../../components/products/ProductDetails';
import RateContainer from './../../components/rating/RateContainer';
import CardProductsContainer from './../../components/products/CardProductsContainer';

function ProductDetailsPage() {
  return (
    <div style={{ minHeight: '780px' }}>
      <CategoryHeader />
      <Container>
        <ProductDetails />
        <RateContainer />
        <CardProductsContainer title='منتجات قد تعجبك' />
      </Container>
    </div>
  );
}

export default ProductDetailsPage;
