import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import RecipeDetails from '../components/RecipeDetails';
import Ingredients from '../components/Ingredients';
import ShareButton from '../components/ShareButton';
import FavoriteButton from '../components/FavoriteButton';

const RecipeInProgress = ({ recipe }) => (
  <div>
    {recipe.length > 0 && <RecipeDetails />}
    {recipe.length > 0 && <Ingredients />}
    <ShareButton />
    <FavoriteButton />
    <Link to="/receitas-feitas">
      <button type="button" data-testid="finish-recipe-btn">
        Finalizar Receita
      </button>
    </Link>
  </div>
);

const mapStateToProps = (state) => ({
  recipe: state.DetailReducer.id,
});

RecipeInProgress.propTypes = {
  recipe: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, null)(RecipeInProgress);
