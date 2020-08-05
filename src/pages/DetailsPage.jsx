import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import ShareBtn from '../components/ShareBtn';
// import FavoriteBtn from '../components/FavoriteBtn';

const DetailsPage = ({ recipes }) => {
  // const { recipes } = useSelector((state) => state.ThemealDB);
  // const id = searchSetting.recipeId;
  <div>
    {/* <h1>{recipes.strMeal}</h1>
    <h2>{recipes.idMeal}</h2> */}
    <h1>Título</h1>
  </div>
};

const mapStateToProps = (state) => ({
  recipes: state.ThemealDB.recipes,
});

DetailsPage.propTypes = {
  recipes: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, null)(DetailsPage);
