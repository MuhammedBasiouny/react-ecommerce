import React from 'react';
import BrandContainer from '../../components/brand/BrandContainer';
import Pagination from '../../components/utils/Pagination';

function AllBrandPage() {
  return (
    <div style={{ minHeight: '800px' }}>
      <BrandContainer />
      <Pagination />
    </div>
  );
}

export default AllBrandPage;
