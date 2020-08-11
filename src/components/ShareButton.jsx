import React, { useState } from 'react';
import './ShareFavButtons.css';
import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

const ShareButton = (props) => {
  let testidBtn = "share-btn";
  if (typeof props.testid != 'undefined') testidBtn = `${props.testid}-horizontal-share-btn`;
  let id = window.location.pathname;
  if (typeof props.idInput != 'undefined') id = `/${props.type}s/${props.idInput}`;
  const [copyToClipBoard, setCopyToClipBoard] = useState(false);
  const handleCopyClipBoard = () => {
    copy(`http://localhost:3000${id}`);
    setCopyToClipBoard(true);
  };
  return (
    <div>
      <input
        type="image"
        data-testid={testidBtn}
        className="share-fav-buttons"
        onClick={() => handleCopyClipBoard()}
        src={shareIcon} alt="Share Button">
      </input>
      {copyToClipBoard && <span>Link copiado!</span>}
    </div>
  );
};

export default ShareButton;
