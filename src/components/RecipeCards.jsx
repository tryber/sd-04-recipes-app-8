// import React from 'react';
// import { connect } from 'react-redux';

// const filteredRecipes = (recipes) => {
//   let filtered = [];
//   /// lógica para filtrar recipes
//   return filtered;
// };

// const RecipeCards = ({ recipes }) =>
//   filteredRecipes(recipes).map((meal, index) => (
//     <div key={meal.idMeal} data-testid={`${index}-recipe-card`}>
//       <img
//         data-testid={`${index}-card-img`}
//         src={meal.strMealThumb}
//         alt="Meal Card"
//       />
//       <p data-testid={`${index}-card-name`}>{meal.strMeal}</p>
//     </div>
//   ));

// const mapStateToProps = (state) => ({
//   recipes: state.ThemealDB.recipes,
// });

// export default connect(mapStateToProps, null)(RecipeCards);
