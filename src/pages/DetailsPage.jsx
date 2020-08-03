import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import ShareBtn from '../components/ShareBtn';
// import FavoriteBtn from '../components/FavoriteBtn';

const DetailsPage = ({ recipes }) => (
  <div>
    <h1>{recipes.strMeal}</h1>
    <h2>{recipes.idMeal}</h2>
  </div>
);

// const HeaderDetails = (recipes) => (
//   <div>
//     <div className="header-div">
//       <div>
//         <h3 data-testid="recipe-title" className="no-margin">
//           {recipes.name}
//         </h3>
//         <span data-testid="recipe-category">
//           {recipes.category} {recipes.alcoholicOrNot}
//         </span>
//       </div>
//       <div className="float-right">
//         <FavoriteBtn dataTestId="favorite-btn" recipes={recipes} />
//         <ShareBtn
//           dataTestId="share-btn"
//           id={recipes.id}
//           type={recipes.type === 'Meal' ? 'comida' : 'bebida'}
//         />
//       </div>
//     </div>
//   </div>
// );

// const Ingredients = (recipes) => (
//   <div className="light-box">
//     <h4>Ingredients</h4>
//     <ul>
//       {recipes.ingredients.map((ingredient, index) => (
//         <li key={ingredient.name} data-testid={`${index}-ingredient-name-and-measure`}>
//           {ingredient.name} - {ingredient.quantity}
//         </li>
//         ))}
//     </ul>
//   </div>
// );

// const Instructions = (recipes) => (
//   <div className="detailPage light-box">
//     <h4>Instructions</h4>
//     <span data-testid="instructions">{recipes.instructions}</span>
//   </div>
// );

// const Thumbnail = (recipes) => (
//   <img src={recipes.image} alt="recipeThumb" data-testid="recipe-photo" className="full-width" />
// );

const mapStateToProps = (state) => ({
  recipes: state.ThemealDB.recipes,
});

DetailsPage.propTypes = {
  recipes: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, null)(DetailsPage);
