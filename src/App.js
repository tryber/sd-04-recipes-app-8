import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Login from './pages/Login';
import MainPage from './pages/Main';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/comidas" component={MainPage} />
        <Route exact path="/perfil" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
