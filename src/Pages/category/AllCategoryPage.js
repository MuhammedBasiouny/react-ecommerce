import React, { useEffect } from 'react';
import CategoryContainer from '../../components/category/CategoryContainer';
import Pagination from '../../components/utils/Pagination';

function AllCategoryPage() {
  return (
    <div style={{ minHeight: '800px' }}>
      <CategoryContainer />
      <Pagination />
    </div>
  );
}

export default AllCategoryPage;
