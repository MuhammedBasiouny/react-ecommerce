import React from 'react';
import CategoryHeader from './../../components/category/CategoryHeader';
import SearchCountResult from './../../components/utils/SearchCountResult';
import { Col, Container, Row } from 'react-bootstrap';
import SideFilter from './../../components/utils/SideFilter';
import CardProductsContainer from './../../components/products/CardProductsContainer';
import Pagination from './../../components/utils/Pagination';

function ShopProductPage() {
  return (
    <div style={{ minHeight: '670px' }}>
      <CategoryHeader />
      <Container>
        <SearchCountResult title='400 نتيجة بحث' />
        <Row className='d-flex flex-row'>
          <Col sm='2' xs='2' md='1' className='d-flex'>
            <SideFilter />
          </Col>
          <Col sm='10' xs='10' md='11'>
            <CardProductsContainer title='' btntitle='' />
          </Col>
        </Row>
        <Pagination />
      </Container>
    </div>
  );
}

export default ShopProductPage;
