import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Login from './pages/Login';
import MainPage from './pages/Main';
import MealDetailPage from './pages/MealDetailPage';
import DrinkDetailPage from './pages/DrinkDetailPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/comidas" component={MainPage} />
        <Route exact path="/comidas/:id" component={MealDetailPage} />
        <Route exact path="/bebidas/:id" component={DrinkDetailPage} />
      </Switch>
    </Router>
  );
}

export default App;
