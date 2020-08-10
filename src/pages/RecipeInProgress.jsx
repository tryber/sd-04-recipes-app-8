import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import RecipeDetails from '../components/RecipeDetails';

import handleIngredients from '../services/listIngredients';

const RecipeInProgress = ({ recipe }) => {
  const [isDisabled, enableBtn] = useState(true);

  const ingredientsList = () => {
    return Object.entries(handleIngredients(recipe)).map((item, index) => (
      <label
        htmlFor={`${item[0]} - ${item[1]}`}
        key={`${item[0]} - ${item[1]}`}
      >
        {`${item[0]} - ${item[1]}`}
        <input
          data-testid={`${index}-ingredient-step`}
          type="checkbox"
          name={`${item[0]} - ${item[1]}`}
          // checked={false}
          onChange={(event) => console.log(event.target.checked)}
        />
      </label>
    ));
  };

  return (
    <div>
      {recipe.length > 0 && <RecipeDetails />}
      {recipe.length > 0 && ingredientsList()}
      <Link to="/receitas-feitas">
        <button
          type="button"
          data-testid="finish-recipe-btn"
          disabled={isDisabled}
        >
          Finalizar Receita
        </button>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => ({
  recipe: state.DetailReducer.id,
});

RecipeInProgress.propTypes = {
  recipe: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, null)(RecipeInProgress);
