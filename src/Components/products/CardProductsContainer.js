import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SubTitle from '../utils/SubTitle';
import ProductCard from './ProductCard';

function CardProductsContainer({ title, btntitle }) {
  return (
    <Container>
      <Row className='my-2 d-flex justify-content-between'>
        <SubTitle title={title} btntitle={btntitle} pathText='/allcategory' />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Row>
    </Container>
  );
}

export default CardProductsContainer;
