import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Login from './pages/Login';
import MainPageFoods from './pages/MainPageFoods';
import MainPageDrinks from './pages/MainPageDrinks';
import DetailsPage from './pages/DetailsPage';
import Explore from './pages/Explore';
import ExploreDrinksOrMeals from './pages/ExploreDrinksOrMeals';
import ExploreByIngredient from './pages/ExploreByIngredients';
import ExploreByArea from './pages/ExploreByArea';
import Profile from './pages/Profile';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/comidas" component={MainPageFoods} />
      <Route exact path="/bebidas" component={MainPageDrinks} />
      <Route exact path="/comidas/:id" component={DetailsPage} />
      <Route exact path="/bebidas/:id" component={DetailsPage} />
      <Route exact path="/explorar" component={Explore} />
      <Route exact path="/explorar/comidas" component={ExploreDrinksOrMeals} />
      <Route exact path="/explorar/bebidas" component={ExploreDrinksOrMeals} />
      <Route
        exact
        path="/explorar/comidas/ingredientes"
        component={ExploreByIngredient}
      />
      <Route
        exact
        path="/explorar/bebidas/ingredientes"
        component={ExploreByIngredient}
      />
      <Route exact path="/explorar/comidas/area" component={ExploreByArea} />
      <Route exact path="/perfil" component={Profile} />
    </Switch>
  );
}

export default App;
