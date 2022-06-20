import React, { useEffect } from 'react';
import CategoryContainer from '../../components/category/CategoryContainer';
import Pagination from '../../components/utils/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategory } from './../../redux/actions/categoryAction';

function AllCategoryPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory);
  }, []);
  const data = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);
  return (
    <div style={{ minHeight: '800px' }}>
      <CategoryContainer />
      <Pagination />
    </div>
  );
}

export default AllCategoryPage;
