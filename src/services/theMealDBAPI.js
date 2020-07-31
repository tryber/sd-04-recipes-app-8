export async function getbyingredient() {
  return fetch(
    'https://www.themealdb.com/api/json/v1/1/filter.php?i=',
  ).then((recipes) =>
    recipes
      .json()
      .then((json) =>
        recipes.ok ? Promise.resolve(json) : Promise.reject(json),
      ),
  );
}
