import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './RecipeCards.css';

const RecipeCards = ({ recipes, currentLocation }) => {
  const recipeType = currentLocation === '/comidas' ? 'Meal' : 'Drink';

  const recipeID = (recipe, currentLocation) => {
    let id;
    if (currentLocation === '/comidas') id = recipe.idMeal;
    else id = recipe.idDrink;
    return id;
  };

  return recipes.slice(0, 12).map((recipe, index) => (
    <div key={recipe[`id${recipeType}`]} data-testid={`${index}-recipe-card`}>
      <Link to={`${currentLocation}/${recipeID(recipe, currentLocation)}`}>
        <img
          data-testid={`${index}-card-img`}
          src={recipe[`str${recipeType}Thumb`]}
          alt={`${recipeType} Card`}
          className="recipe-photo"
        />
      </Link>
      <p data-testid={`${index}-card-name`}>{recipe[`str${recipeType}`]}</p>
    </div>
  ));
};

const mapStateToProps = (state) => ({
  recipes: state.ThemealDB.recipes,
  currentLocation: state.updateLocation.currentLocation,
});

RecipeCards.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentLocation: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(RecipeCards);
