import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestFavoriteFetching, favoriteFetchingSuccess } from '../actions/favoriteAction';
import './ShareFavButtons.css';

import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

const checkIfFavorite = (props, favorite, setFavorite) => {
  const id = props.recipe[0][Object.keys(props.recipe[0])[0]];
  // console.log('test search Id', id);
  let favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (favoriteRecipes === null) favoriteRecipes = [''];
  // console.log('favoriteRecipes', favoriteRecipes);
  favoriteRecipes.map((recipe) => {
    if (recipe.id === id) setFavorite(true)
    return null;
  })
};
const addFavorite = (props, dispatch) => {
  const recipeType = props.recipeType;
  console.log("here recipeType", recipeType);
  const recipe = props.recipe[0];
  let alcoholicValue = ''
  let areaValue = '';
  let type = 'comida';
  // console.log("test area", recipe.strAlcoholic);
  if (recipeType === 'Meal') {
    areaValue = recipe.strArea;
  } else {
    alcoholicValue = recipe.strAlcoholic;
    type = 'bebida';
  };

  const newFavorite = {
    id: recipe[`id${recipeType}`],
    type: type,
    area: areaValue,
    category: recipe.strCategory,
    alcoholicOrNot: alcoholicValue,
    name: recipe[`str${recipeType}`],
    image: recipe[`str${recipeType}Thumb`],
  }
  dispatch(requestFavoriteFetching());
  let favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  favoriteRecipes === null ?  favoriteRecipes = [newFavorite] : favoriteRecipes.push(newFavorite);
  // if (favoriteRecipes === null) favoriteRecipes = [''];
  // favoriteRecipes.push(newFavorite);
  // console.log("push", favoriteRecipes);
  localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  dispatch(favoriteFetchingSuccess());
};

const removeFavorite = (props, dispatch) => {
  dispatch(requestFavoriteFetching());
  const id = props.recipe[0][Object.keys(props.recipe[0])[0]];
  let favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const favoriteRecipesFiltered = favoriteRecipes.filter(recipe => recipe.id !== id);
  localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipesFiltered));
  dispatch(favoriteFetchingSuccess());
};

const handleFavorite = (favorite, setFavorite, props, dispatch) => {
  favorite === true ? removeFavorite(props, dispatch) : addFavorite(props, dispatch);
  setFavorite(!favorite);
};


const FavoriteButton = (props) => {
  const dispatch = useDispatch();
  const [favorite, setFavorite] = useState(false);
  const backgroundBtn = favorite ? blackHeartIcon : whiteHeartIcon;
  useEffect(() => {
    checkIfFavorite(props, favorite, setFavorite,);
  }, []);

  return (
    <input
      type="image"
      data-testid="favorite-btn"
      className="share-fav-buttons"
      onClick={() => handleFavorite(favorite, setFavorite, props, dispatch)}
      src={backgroundBtn} alt="Favorite Button"
    >
    </input>
    // <button
    //   type="button"
    //   data-testid="favorite-btn"
    //   className="share-fav-buttons"
    //   onClick={() => handleFavorite(favorite, setFavorite, props, dispatch)}
    // >
    //   <img src={backgroundBtn} alt="Favorite Button" />
    // </button>
  );
};

export default FavoriteButton;
