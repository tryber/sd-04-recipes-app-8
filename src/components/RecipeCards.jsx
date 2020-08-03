import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './RecipeCards.css';

const filteredRecipes = (recipes) => {
  let filtered = [];
  /// lógica para filtrar recipes
  filtered = recipes.slice(0, 12);
  return filtered;
};

const RecipeCards = ({ recipes, pageType }) => {
  const recipeType = pageType === 'themeal' ? 'Meal' : 'Drink';

  return filteredRecipes(recipes).map((recipe, index) => (
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
  pageType: state.pageTypeReducer.type,
});

RecipeCards.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageType: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(RecipeCards);
