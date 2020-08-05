import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import RecipeCards from '../components/RecipeCards';
import Footer from '../components/Footer';

import { changeLocation } from '../actions/index';

import FetchThemealAPI from '../actions/themealdb';

const MainPageDrinks = ({
  searchBarVisible,
  isFetching,
  saveLocation,
  recipes,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    saveLocation(window.location.pathname);
    dispatch(FetchThemealAPI({ searchedValue: '' }));
  }, []);

  return (
    <div>
      <Header title={'Bebidas'} />
      {searchBarVisible && <SearchBar />}
      {isFetching && 'Loading...'}
      {!isFetching && recipes !== null && <RecipeCards />}
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  searchBarVisible: state.searchBar.isVisible,
  // searchResultMoreOne: state.searchBar.searchResultMoreOne,
  isFetching: state.ThemealDB.isFetching,
  recipes: state.ThemealDB.recipes,
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
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPageDrinks);
