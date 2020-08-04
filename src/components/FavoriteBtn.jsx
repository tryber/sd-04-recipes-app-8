import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

const Favorite = (recipes, setFavoriteIcon) => {
  const { id, type, area, category, alcoholicOrNot, name, image } = recipes;
  const newFavorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  const typeObj = {
    Drink: 'bebida',
    Meal: 'comida',
  };

  const favoriteIndex = newFavorites.findIndex((favorite) => favorite.id === recipes.id);
  if (favoriteIndex === -1) {
  newFavorites.push({
    id,
    type: typeObj[type],
    area: area || '',
    category: category || '',
    alcoholicOrNot: alcoholicOrNot || '',
    name,
    image,
  });
  localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
  setFavoriteIcon(blackHeartIcon);
} else {
  newFavorites.splice(favoriteIndex, 1);
  localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
  setFavoriteIcon(whiteHeartIcon);
}
};

const FavoriteBtn = ({ dataTestId, recipes }) => {
  const [favoriteIcon, setFavoriteIcon] = useState(whiteHeartIcon);
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    if (
      favorites.find((favorite) => favorite.id === recipes.id)
    ) {
      setFavoriteIcon(blackHeartIcon);
    }
  }, [recipes]);
  return (
    <button className="invisible-btn" onClick={() => Favorite(recipes, setFavoriteIcon)}>
      <img data-testid={dataTestId} src={favoriteIcon} alt="share" className="ruby-filter" />
    </button>
  );
};

FavoriteBtn.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  recipes: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default FavoriteBtn;
