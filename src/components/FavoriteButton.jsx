import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { requestFavoriteFetching, favoriteFetchingSuccess } from '../actions/favoriteAction';
import './ShareFavButtons.css';

import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

const checkIfFavorite = (props, favorite, setFavorite) => {
  const id = props.recipe[0][Object.keys(props.recipe[0])[0]];
  let favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (favoriteRecipes === null) favoriteRecipes = [''];
  favoriteRecipes.map((recipe) => {
    if (recipe.id === id) setFavorite(true);
    return null;
  })
};
const addFavorite = (props, dispatch) => {
  const recipeType = props.recipeType;
  const recipe = props.recipe[0];
  let alcoholicValue = ''
  let areaValue = '';
  let type = 'comida';
  if (recipeType === 'Meal') {
    areaValue = recipe.strArea;
  } else {
    alcoholicValue = recipe.strAlcoholic;
    type = 'bebida';
  }

  const newFavorite = {
    id: recipe[`id${recipeType}`],
    type,
    area: areaValue,
    category: recipe.strCategory,
    alcoholicOrNot: alcoholicValue,
    name: recipe[`str${recipeType}`],
    image: recipe[`str${recipeType}Thumb`],
  };

  dispatch(requestFavoriteFetching());
  let favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (favoriteRecipes === null) {
    favoriteRecipes = [newFavorite];
  }
  else {
    favoriteRecipes.push(newFavorite);
  }

  localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  dispatch(favoriteFetchingSuccess());
};

const removeFavorite = (props, dispatch) => {
  dispatch(requestFavoriteFetching());
  const id = props.recipe[0][Object.keys(props.recipe[0])[0]];
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const favoriteRecipesFiltered = favoriteRecipes.filter((recipe) => recipe.id !== id);
  localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipesFiltered));
  dispatch(favoriteFetchingSuccess());
};

const handleFavorite = (favorite, setFavorite, props, dispatch) => {
  if (favorite === true) {
    removeFavorite(props, dispatch);
  } else {
    addFavorite(props, dispatch);
  }
  setFavorite(!favorite);
};


const FavoriteButton = (props) => {
  const dispatch = useDispatch();
  const [favorite, setFavorite] = useState(false);
  const backgroundBtn = favorite ? blackHeartIcon : whiteHeartIcon;
  useEffect(() => {
    checkIfFavorite(props, favorite, setFavorite);
  }, []);

  return (
    <input
      type="image"
      data-testid="favorite-btn"
      className="share-fav-buttons"
      onClick={() => handleFavorite(favorite, setFavorite, props, dispatch)}
      src={backgroundBtn} alt="Favorite Button"
    />
  );
};

export default FavoriteButton;
