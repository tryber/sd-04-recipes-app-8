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
import './MainPageFoods.css';

const MainPageDrinks = ({
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
    dispatch(FetchThemealAPI({ searchedValue: '' }));
    dispatch(FetchCategoriesAPI());
  }, []);

  return (
    <div>
      <div className="main-drinks-title">
        <Header title={'Bebidas'} />
      </div>
      <div>
        {!isFetchingCategories && categories.length > 0 && <CategoryButtons />}
      </div>
      <div className="content">
        {searchBarVisible && <SearchBar />}
        {isFetching && 'Loading...'}
        {!isFetching && recipes !== null && <RecipeCards />}
        <Footer />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  searchBarVisible: state.searchBar.isVisible,
  // searchResultMoreOne: state.searchBar.searchResultMoreOne,
  isFetching: state.ThemealDB.isFetching,
  recipes: state.ThemealDB.recipes,
  isFetchingCategories: state.CategoriesReducer.isFetchingCategories,
  categories: state.CategoriesReducer.categories,
});

const mapDispatchToProps = (dispatch) => ({
  saveLocation: (payload) => dispatch(changeLocation(payload)),
});

MainPageDrinks.propTypes = {
  searchBarVisible: PropTypes.bool.isRequired,
  // searchResultMoreOne: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  saveLocation: PropTypes.func.isRequired,
  recipes: PropTypes.arrayOf(PropTypes.string).isRequired,
  isFetchingCategories: PropTypes.bool.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPageDrinks);
