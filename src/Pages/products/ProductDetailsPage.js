import React from 'react';
import CategoryHeader from '../../components/category/CategoryHeader';
import { Container } from 'react-bootstrap';
import ProductDetails from './../../components/products/ProductDetails';
import RateContainer from './../../components/rating/RateContainer';

function ProductDetailsPage() {
  return (
    <div style={{ minHeight: '780px' }}>
      <CategoryHeader />
      <Container>
        <ProductDetails />
        <RateContainer />
      </Container>
    </div>
  );
}

export default ProductDetailsPage;
