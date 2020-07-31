import React from 'react';
import { connect } from 'react-redux';

import HeaderFoods from '../components/HeaderFoods';

const MainPage = () => <HeaderFoods />;

const mapStateToProps = (state) => ({
  searchBarVisible: state.searchBar.isVisible,
});

export default connect(mapStateToProps, null)(MainPage);
