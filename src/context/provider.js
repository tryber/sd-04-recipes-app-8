import React from 'react';
import PropTypes from 'prop-types';
import RecipeAppContext from './context';

const context = {
    mealsToken,
    cocktailsToken,
    setMealsToken,
    setCocktailsToken,
    error,
    setError,
    loading,
    setLoading,
    fetchMealID,
    fetchDrinkID,
    mealDetailData,
    setMealDetailData,
    drinkDetailData,
    setDrinkDetailData,
    favorite,
    setFavorite,
    choice,
    setChoice,
    mealsData,
    beverageData,
    basicMealData,
    setBasicMealData,
    basicDrikData,
    setBasicDrikData,
    fetchBasicMeal,
    fetchBasicDrink,
    ingredients,
    setIngredients,
    finished,
    setFinished,
    foodAreaFilter,
    setFoodAreaFilter,
    list,
    setList,
  };

const RecipeAppProvider = ( children ) => {
// fazer
  return (
    <RecipeAppContext.Provider value={context}>
      {children}
    </RecipeAppContext.Provider>
  );
};

RecipeAppProvider.propTypes = { children: PropTypes.node.isRequired };

export default RecipeAppProvider;
