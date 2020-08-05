import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './RecipeCards.css';

const filteredRecipes = (recipes, category) => {
  let filtered = [];
  if (category === '') filtered = recipes;
  if (category !== '')
    filtered = recipes.filter((recipe) => recipe.strCategory === category);
  return filtered.slice(0, 12);
};

const RecipeCards = ({ recipes, currentLocation, category }) => {
  const recipeType = currentLocation === '/comidas' ? 'Meal' : 'Drink';

  return filteredRecipes(recipes, category).map((recipe, index) => (
    <div key={recipe[`id${recipeType}`]} data-testid={`${index}-recipe-card`}>
      <img
        data-testid={`${index}-card-img`}
        src={recipe[`str${recipeType}Thumb`]}
        alt={`${recipeType} Card`}
        className="recipe-photo"
      />
      <p data-testid={`${index}-card-name`}>{recipe[`str${recipeType}`]}</p>
    </div>
  ));
};

const mapStateToProps = (state) => ({
  recipes: state.ThemealDB.recipes,
  currentLocation: state.updateLocation.currentLocation,
  category: state.filterByCategory.selectedCategory,
});

RecipeCards.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentLocation: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(RecipeCards);
