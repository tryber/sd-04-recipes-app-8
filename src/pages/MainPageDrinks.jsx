import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import RecipeCards from '../components/RecipeCards';
import Footer from '../components/Footer';

import { changeLocation } from '../actions/index';

const MainPageDrinks = ({
  searchBarVisible,
  searchResultMoreOne,
  isFetching,
  saveLocation,
}) => {
  useEffect(() => {
    saveLocation(window.location.pathname);
  }, []);

  return (
    <div>
      <Header title={'Bebidas'} />
      {searchBarVisible && <SearchBar />}
      {isFetching && 'Loading...'}
      {searchResultMoreOne && <RecipeCards />}
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  searchBarVisible: state.searchBar.isVisible,
  searchResultMoreOne: state.searchBar.searchResultMoreOne,
  isFetching: state.ThemealDB.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  saveLocation: (payload) => dispatch(changeLocation(payload)),
});

MainPageDrinks.propTypes = {
  searchBarVisible: PropTypes.bool.isRequired,
  searchResultMoreOne: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  saveLocation: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPageDrinks);
