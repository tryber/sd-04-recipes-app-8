import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import RecipeCards from '../components/RecipeCards';
import CategoryButtons from '../components/CategoryButtons';
import Footer from '../components/Footer';

import { changeLocation } from '../actions/index';
import FetchThemealAPI from '../actions/themealdb';
import FetchCategoriesAPI from '../actions/categoriesdbActions';

const MainPageFoods = ({
  searchBarVisible,
  isFetching,
  saveLocation,
  isFetchingCategories,
  categories,
  recipes,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    saveLocation(window.location.pathname);
    dispatch(FetchCategoriesAPI());
    if (recipes.length === 0) {dispatch(FetchThemealAPI({ searchedValue: '' }))};
  }, []);

  return (
    <div>
      <Header title={'Comidas'} />
      {!isFetchingCategories && categories.length > 0 && <CategoryButtons />}
      {searchBarVisible && <SearchBar />}
      {isFetching && 'Loading...'}
      {!isFetching && recipes !== null && <RecipeCards />}
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  searchBarVisible: state.searchBar.isVisible,
  isFetching: state.ThemealDB.isFetching,
  recipes: state.ThemealDB.recipes,
  isFetchingCategories: state.CategoriesReducer.isFetchingCategories,
  categories: state.CategoriesReducer.categories,
});

const mapDispatchToProps = (dispatch) => ({
  saveLocation: (payload) => dispatch(changeLocation(payload)),
});

MainPageFoods.propTypes = {
  searchBarVisible: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  saveLocation: PropTypes.func.isRequired,
  recipes: PropTypes.arrayOf(PropTypes.string).isRequired,
  isFetchingCategories: PropTypes.bool.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPageFoods);
