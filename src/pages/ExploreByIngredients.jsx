import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ExploreHeader from '../components/ExploreHeader';
import Footer from '../components/Footer';

import FetchIngredientsAPI from '../actions/ingredientsActions';
import { changeLocation } from '../actions/index';

const ExploreByIngredient = ({ isFetchingIngredients, ingredients }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeLocation(window.location.pathname.slice(9, 17)));
    dispatch(FetchIngredientsAPI());
  }, []);

  const pageType =
    window.location.pathname.slice(9, 17) === '/comidas'
      ? 'themeal'
      : 'thecocktail';
  const ingredientType =
    window.location.pathname.slice(9, 17) === '/comidas'
      ? 'Ingredient'
      : 'Ingredient1';

  const renderIngredientCards = (arrIngredients) =>
    arrIngredients.slice(0, 12).map((item, index) => (
      <Link to={window.location.pathname.slice(9, 17)}>
        <div data-testid={`${index}-ingredient-card`}>
          <img
            data-testid={`${index}-card-img`}
            src={`https://www.${pageType}db.com/images/ingredients/${
              item[`str${ingredientType}`]
            }-Small.png`}
            alt="Ingredient Card"
          />
          <p data-testid={`${index}-card-name`}>
            {item[`str${ingredientType}`]}
          </p>
        </div>
      </Link>
    ));

  return (
    <div>
      <ExploreHeader title={'Explorar Ingredientes'} />
      {isFetchingIngredients && 'Loading...'}
      {ingredients.length > 0 && renderIngredientCards(ingredients)}
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isFetchingIngredients: state.IngredientsReducer.isFetchingIngredients,
  ingredients: state.IngredientsReducer.ingredients,
});

ExploreByIngredient.propTypes = {
  isFetchingIngredients: PropTypes.bool.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, null)(ExploreByIngredient);
