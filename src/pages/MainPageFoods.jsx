import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';

const MainPageFoods = () => <Header />;

const mapStateToProps = (state) => ({
  searchBarVisible: state.searchBar.isVisible,
});

export default connect(mapStateToProps, null)(MainPageFoods);
