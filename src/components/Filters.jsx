import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FetchCategoriesAPI from '../actions/categoriesdbActions';


const Filters = () => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(FetchCategoriesAPI()) }, []);

  return (
    <h1>Here is Filters</h1>

  )
}
export default Filters;