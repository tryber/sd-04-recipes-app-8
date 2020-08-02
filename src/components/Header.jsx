import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { changeVisibility } from '../actions/index';

import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

import './Header.css';

const Header = ({ changeIsVisible }) => {
  const str = window.location.pathname.slice(1);
  const titleHeader = `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
  return (
    <header className="header-foods-drinks">
      <Link to="/perfil">
        <img
          src={profileIcon}
          alt="Profile Icon"
          data-testid="profile-top-btn"
        />
      </Link>
      <h3 data-testid="page-title">{titleHeader}</h3>
      <button type="button" onClick={() => changeIsVisible()}>
        <img src={searchIcon} alt="Search Icon" data-testid="search-top-btn" />
      </button>
    </header>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeIsVisible: () => dispatch(changeVisibility()),
});

Header.propTypes = {
  changeIsVisible: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Header);
