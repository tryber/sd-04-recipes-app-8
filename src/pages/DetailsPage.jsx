import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { changeLocation } from '../actions/index';
import FetchDetailIdAPI from '../actions/detailActionsId';
import FetchDetailRecomandAPI from '../actions/detailActionsRecomand';

import RecipeDetails from '../components/RecipeDetails';
import Ingredients from '../components/Ingredients';
import RecipeVideo from '../components/RecipeVideo';
import RecomendationCards from '../components/RecomendationCards';
import StartRecipe from '../components/StartRecipe';

const DetailsPage = ({ currentLocation, recipe, recomendation }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeLocation(window.location.pathname.slice(0, 8)));
    const pageType =
      // currentLocation === '/comidas'
      window.location.pathname.slice(0, 8) === '/comidas'
        ? 'recommendation_drink'
        : 'recommendation_food';
    dispatch(FetchDetailRecomandAPI({ searchOption: pageType }));
    dispatch(
      FetchDetailIdAPI({
        searchOption: 'idRecipe',
        searchedValue: window.location.pathname.slice(9),
      }),
    );
  }, []);

  const recipeType = currentLocation === '/comidas' ? 'Meal' : 'Drink';

  return (
    <div className="details-container">
      <div className="title-icons-container">
        <div className="recipe-title">
      {recipe.length > 0 && <RecipeDetails />}
    </div>
        <div className="ing-display">
      {recipe.length > 0 && <Ingredients />}
    </div>
        <div className="instr-display">
      <h3>Instructions</h3>
        <div data-testid="instructions">
          {recipeType === 'Meal' && recipe.length > 0 && <RecipeVideo />}
          {recomendation.length > 0 && <RecomendationCards />}
        </div>
          <StartRecipe />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentLocation: state.updateLocation.currentLocation,
  recipe: state.DetailReducer.id,
  recomendation: state.DetailReducer.recomendation,
});

DetailsPage.propTypes = {
  currentLocation: PropTypes.string.isRequired,
  recipe: PropTypes.arrayOf(PropTypes.string).isRequired,
  recomendation: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, null)(DetailsPage);
