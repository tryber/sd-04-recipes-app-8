import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Footer from '../components/Footer';

const MainPageFoods = () => (
  <div>
    <Header />
    <Footer />
  </div>
);

const mapStateToProps = (state) => ({
  searchBarVisible: state.searchBar.isVisible,
});

export default connect(mapStateToProps, null)(MainPageFoods);
