import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { changePageType } from '../actions/index';

import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

import './Footer.css';

const Footer = ({ setPageType }) => (
  <footer data-testid="footer" className="footer">
    <Link to="/bebidas" onClick={() => setPageType('thecocktail')}>
      <img data-testid="drinks-bottom-btn" src={drinkIcon} alt="Drink Icon" />
    </Link>
    <Link to="/explorar">
      <img
        data-testid="explore-bottom-btn"
        src={exploreIcon}
        alt="Explore Icon"
      />
    </Link>
    <Link to="/comidas" onClick={() => setPageType('themeal')}>
      <img data-testid="food-bottom-btn" src={mealIcon} alt="Meal Icon" />
    </Link>
  </footer>
);

const mapDispatchToProps = (dispatch) => ({
  setPageType: (payload) => dispatch(changePageType(payload)),
});

Footer.propTypes = {
  setPageType: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Footer);
