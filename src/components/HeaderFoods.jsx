import React from 'react';
import { Link } from 'react-router-dom';

import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

const HeaderFoods = () => (
  <header>
    <Link to="/perfil">
      <img src={profileIcon} alt="Profile Icon" data-testid="profile-top-btn" />
    </Link>
    <h3 data-testid="page-title">Comidas</h3>
    <img src={searchIcon} alt="Search Icon" data-testid="search-top-btn" />
  </header>
);

export default HeaderFoods;
