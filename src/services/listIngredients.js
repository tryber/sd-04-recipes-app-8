const filteredIngredients = [];
const filteredMeasures = [];

const handleIngredients = (recipe) => {
  Object.keys(recipe[0]).forEach(function (item) {
    if (
      item.includes('strIngredient') &&
      recipe[0][item] !== '' &&
      recipe[0][item] !== null
    ) {
      filteredIngredients.push(recipe[0][item]);
    }
    if (
      item.includes('strMeasure') &&
      recipe[0][item] !== ' ' &&
      recipe[0][item] !== null
    ) {
      filteredMeasures.push(recipe[0][item]);
    }
  });

  const ingredients = {};
  filteredIngredients.forEach(
    (ingr, i) => (ingredients[ingr] = filteredMeasures[i]),
  );

  return ingredients;
};

export default handleIngredients;
