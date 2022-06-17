import React from 'react';
import { Container } from 'react-bootstrap';
import ChoosePayMethod from '../../components/checkout/ChoosePayMethod';

const ChoosePayMethodPage = () => {
  return (
    <Container style={{ minHeight: '800px' }}>
      <ChoosePayMethod />
    </Container>
  );
};

export default ChoosePayMethodPage;
