import React from 'react';
import CategoryHeader from '../../components/category/CategoryHeader';
import { Container } from 'react-bootstrap';
import ProductDetails from './../../components/products/ProductDetails';

function ProductDetailsPage() {
  return (
    <div style={{ minHeight: '780px' }}>
      <CategoryHeader />
      <Container>
        <ProductDetails />
      </Container>
    </div>
  );
}

export default ProductDetailsPage;
