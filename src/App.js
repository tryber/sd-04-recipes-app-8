import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Login from './pages/Login';
import MainPageFoods from './pages/MainPageFoods';
import MainPageDrinks from './pages/MainPageDrinks';
import Profile from './pages/Profile';
import DetailsPage from './pages/DetailsPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/comidas" component={MainPageFoods} />
        <Route exact path="/bebidas" component={MainPageDrinks} />
        <Route exact path="/perfil" component={Profile} />
        <Route path="/comidas/:id" component={DetailsPage} />
        <Route path="/bebidas/:id" component={DetailsPage} />
      </Switch>
    </Router>
  );
}

export default App;
