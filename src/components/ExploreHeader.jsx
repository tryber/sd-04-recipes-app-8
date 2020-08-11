import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import profileIcon from '../images/profileIcon.svg';

import '../components/ExploreHeader.css';

const ExploreHeader = ({ title }) => (
  <header>
    <div>
      <div className="explore-header-container">
        <Link to="/perfil">
        <img src={profileIcon} alt="Profile Icon" data-testid="profile-top-btn" />
        </Link>
        <h3 data-testid="page-title">{title}</h3>
      </div>
    </div>
  </header>
);

ExploreHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ExploreHeader;
