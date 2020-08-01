import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Footer from '../components/Footer';
import profileIcon from '../images/profileIcon.svg';

import './Profile.css';

// const [email, setEmail] = useState('');

// useEffect(() => {
//   setEmail(JSON.parse(localStorage.getItem('user')).email);
// }, []);

const Profile = ({ email }) => (
  <div>
    <header className="header-profile">
      <img src={profileIcon} alt="Profile Icon" data-testid="profile-top-btn" />
      <h3 data-testid="page-title">Perfil</h3>
    </header>
    <p data-testid="profile-email">{email}</p>
    <Link to="/receitas-feitas">
      <button type="button" data-testid="profile-done-btn">
        Receitas Feitas
      </button>
    </Link>
    <Link to="/receitas-favoritas">
      <button type="button" data-testid="profile-favorite-btn">
        Receitas Favoritas
      </button>
    </Link>
    <Link to="/">
      <button
        type="button"
        data-testid="profile-logout-btn"
        onClick={() => localStorage.clear()}
      >
        Sair
      </button>
    </Link>
    <Footer />
  </div>
);

const mapStateToProps = (state) => ({
  email: state.saveEmail.email,
});

Profile.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Profile);
