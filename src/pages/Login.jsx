import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validEmail: false,
      validPassword: false,
      email: '',
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    localStorage.setItem('mealsToken', '1');

    localStorage.setItem('cocktailsToken', '1');

    localStorage.setItem('user', JSON.stringify({ email }));

    return <Redirect to="/comidas" />;
  }

  render() {
    return (
      <div>
        Login
        <input
          type="email"
          data-testid="email-input"
          placeholder="Email"
          onChange={(event) => console.log(event.target.value)}
        />
        <input
          type="password"
          data-testid="password-input"
          placeholder="Senha"
          minLength="7"
          onChange={(event) => console.log(event.target.value)}
        />
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled
          onClick={() => this.handleLogin}
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
