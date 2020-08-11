import React from 'react';
import { Link } from 'react-router-dom';

import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

import './Footer.css';

const Footer = () => (
  <footer data-testid="footer" className="footer-container">
    <Link to="/bebidas">
      <img
        data-testid="drinks-bottom-btn" 
        src={drinkIcon} alt="Drink Icon" 
        className="drink-icon" 
      />
    </Link>
    <Link to="/explorar">
      <img
        className="explore-icon"
        data-testid="explore-bottom-btn"
        src={exploreIcon}
        alt="Explore Icon"
      />
    </Link>
    <Link to="/comidas">
      <img data-testid="food-bottom-btn" src={mealIcon} alt="Meal Icon" className="meal-icon" />
    </Link>
  </footer>
);

export default Footer;
