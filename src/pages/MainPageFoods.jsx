import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
// import RecipeCards from '../components/RecipeCards';
import Footer from '../components/Footer';

const MainPageFoods = ({ searchBarVisible, isFetching }) => {
  return (
    <div>
      <Header title={'Comidas'} />
      {searchBarVisible && <SearchBar />}
      {isFetching && 'Loading...'}
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  searchBarVisible: state.searchBar.isVisible,
  isFetching: state.ThemealDB.isFetching,
});

MainPageFoods.propTypes = {
  searchBarVisible: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, null)(MainPageFoods);
