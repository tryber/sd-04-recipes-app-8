import React from 'react';

import './ShareFavButtons.css';

import shareIcon from '../images/shareIcon.svg';

const ShareButton = () => (
  <button type="button" data-testid="share-btn" className="share-fav-buttons">
    <img src={shareIcon} alt="Share Button" />
  </button>
);

export default ShareButton;
