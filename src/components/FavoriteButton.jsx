import React, { useState } from 'react';

import './ShareFavButtons.css';

import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

const FavoriteButton = () => {
  const [favorite, setFavorite] = useState(false);

  const backgroundBtn = favorite ? blackHeartIcon : whiteHeartIcon;

  return (
    <button
      type="button"
      data-testid="favorite-btn"
      className="share-fav-buttons"
      onClick={() => setFavorite()}
    >
      <img src={backgroundBtn} alt="Favorite Button" />
    </button>
  );
};

export default FavoriteButton;
