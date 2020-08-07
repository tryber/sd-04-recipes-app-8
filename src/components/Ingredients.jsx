import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Ingredients = ({ recipe }) => <p>{recipe[0].strIngredient1}</p>;

const mapStateToProps = (state) => ({
  recipe: state.DetailReducer.id,
});

Ingredients.propTypes = {
  recipe: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, null)(Ingredients);
