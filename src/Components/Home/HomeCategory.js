import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SubTitle from '../utils/SubTitle';
import CategoryCard from './../category/CategoryCard';
import cloth from '../../images/clothe.png';
import cat2 from '../../images/cat2.png';
import laptop from '../../images/labtop.png';
import sale from '../../images/sale.png';
import pic from '../../images/pic.png';

function HomeCategory() {
  return (
    <Container>
      <SubTitle title='التصنيفات' btntitle='المزيد' pathText='/allcategory' />
      <Row className='my-2 d-flex justify-content-between'>
        <CategoryCard title='اجهزة منزلية' img={cloth} background='#F4DBA4' />
        <CategoryCard title='اجهزة منزلية' img={cat2} background='#F4DBA4' />
        <CategoryCard title='اجهزة منزلية' img={laptop} background='#0034FF' />
        <CategoryCard title='اجهزة منزلية' img={sale} background='#F4DBA4' />
        <CategoryCard title='اجهزة منزلية' img={cloth} background='#FF6262' />
        <CategoryCard title='اجهزة منزلية' img={pic} background='#F4DBA4' />
      </Row>
    </Container>
  );
}

export default HomeCategory;
