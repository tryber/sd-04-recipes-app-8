import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import mathieuchef from '../images/mathieuchef.png';
import './Login.css';

import { saveUserEmail } from '../actions/index';

const Login = ({ saveMail }) => {
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [email, setEmail] = useState('');

  const checkEmail = (value) => {
    setEmail(value);
    const regexEmail = /[A-Z0-9]{1,}@[A-Z0-9]{2,}\.[A-Z0-9]{2,}/i;
    return value.match(regexEmail) ? setValidEmail(true) : setValidEmail(false);
  };

  const checkPassword = (pass) => (
    pass.length > 6 ? setValidPassword(true) : setValidPassword(false)
  );

  const handleLogin = () => {
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    localStorage.setItem('user', JSON.stringify({ email }));
    saveMail(email);
  };

  return (
    <div className="body">
      <div style={{ margin: 'auto', height: '640px', display: 'flex' }}>
      <form className="form-container">
      <h1 className="app-name">{' Couscous à la Mathieu '}</h1>
      <img src={mathieuchef} className="image" alt="Foto do Mathieu Chef" />
      Login
      <input
        className="login-and-pass-input"
        type="email"
        data-testid="email-input"
        placeholder="Email"
        onChange={(event) => checkEmail(event.target.value)}
      />
      <input
        className="login-and-pass-input"
        type="password"
        data-testid="password-input"
        placeholder="Senha"
        onChange={(event) => checkPassword(event.target.value)}
      />
      <Link to="/comidas">
        <button
          className="signin-button"
          type="button"
          data-testid="login-submit-btn"
          disabled={!validEmail || !validPassword}
          onClick={() => handleLogin()}
        >
          Entrar
        </button>
      </Link>
    </form>
    </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  saveMail: (payload) => dispatch(saveUserEmail(payload)),
});

Login.propTypes = {
  saveMail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
