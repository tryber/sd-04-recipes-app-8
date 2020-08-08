import React, { useState } from 'react';
import './ShareFavButtons.css';
import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');
const ShareButton = () => {
  const [copyToClipBoard, setCopyToClipBoard] = useState(false);


  const handleCopyClipBoard = () => {
    copy(`http://localhost:3000${window.location.pathname}`);
    setCopyToClipBoard(true);
  };

  return (
    <button 
      type="button"
      data-testid="share-btn"
      className="share-fav-buttons"
      onClick={() => handleCopyClipBoard()}
    >
      <img src={shareIcon} alt="Share Button" />
      {copyToClipBoard && <span>Link copiado!</span>}
    </button>
  );
};

export default ShareButton;
