import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './RecipeCards.css';

const RecipeDetails = ({ recipe, currentLocation }) => {
  const recipeType = currentLocation === '/comidas' ? 'Meal' : 'Drink';
  return recipe.map((recipe) => (
    <div key={recipe[`id${recipeType}`]}>
      <div>
        <img
          data-testid="recipe-photo"
          src={recipe[`str${recipeType}Thumb`]}
          alt={`${recipeType} Card`}
          className="recipe-photo"
        />
        <h1 data-testid="recipe-title">{recipe[`str${recipeType}`]}</h1>
        <h4 data-testid="recipe-category">{recipe.strCategory}</h4>
      </div>
      <h3>Instructions</h3>
      <p data-testid="instructions">{recipe.strInstructions}</p>
    </div>
  ));
};

const mapStateToProps = (state) => ({
  recipe: state.DetailReducer.id,
  currentLocation: state.updateLocation.currentLocation,
});

RecipeDetails.propTypes = {
  recipe: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentLocation: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(RecipeDetails);
