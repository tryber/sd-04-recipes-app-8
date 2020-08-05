import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import ShareBtn from '../components/ShareBtn';
// import FavoriteBtn from '../components/FavoriteBtn';

const DetailsPage = ( props ) => {
  // console.log(props.match.params.id);
  return (
  <div>
    <h1>Título 2</h1>
  </div>
)};

const mapStateToProps = (state) => ({
  recipes: state.ThemealDB.recipes,
});

DetailsPage.propTypes = {
  recipes: PropTypes.any,
};

export default connect(mapStateToProps, null)(DetailsPage);
