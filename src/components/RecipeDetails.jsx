import React from 'react';

const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
let finished = [{ id: 'nothing', doneDate: '' }];
if (doneRecipes) return finished = doneRecipes;

const RecipeDetails = () => {
  const {
    error,
    loading,
    mealDetailData,
    drinkDetailData,
    choice,
  } = useContext(RecipeAppContext);

  const dataHelper = choice === 'meal' ? mealDetailData : drinkDetailData;
  const dataArr = dataDealer(choice, dataHelper);
  const ingredientsArr = listIngredients(dataHelper);
  const finished = finishedArr.some((elem) => elem.id === dataArr.id);
  const started = checkStarted(dataArr.id, choice);

  return (
    <div className="recipe-details-page">
      {!loading && error && <h4>{error}</h4>}
      {renderDetailsPage(dataArr, choice, ingredientsArr, finished, started)}
    </div>
  );
};

export default RecipeDetails;
