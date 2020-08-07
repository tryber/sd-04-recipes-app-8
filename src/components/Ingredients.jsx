import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Ingredients = ({ recipe }) => {
  let filteredIngredients = [];
  let filteredMeasures = [];
  Object.keys(recipe[0]).forEach(function (item) {
    if (
      item.includes('strIngredient') &
      (recipe[0][item] !== '') &
      (recipe[0][item] !== null)
    ) {
      filteredIngredients.push(recipe[0][item]);
    }
    if (
      item.includes('strMeasure') &
      (recipe[0][item] !== ' ') &
      (recipe[0][item] !== null)
    ) {
      filteredMeasures.push(recipe[0][item]);
    }
  });

  let ingredients = {};
  filteredIngredients.forEach(
    (ingr, i) => (ingredients[ingr] = filteredMeasures[i]),
  );

  return Object.entries(ingredients).map((item, index) => (
    <p
      data-testid={`${index}-ingredient-and-measure`}
    >{`- ${item[0]} - ${item[1]}`}</p>
  ));
};

const mapStateToProps = (state) => ({
  recipe: state.DetailReducer.id,
});

Ingredients.propTypes = {
  recipe: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, null)(Ingredients);
