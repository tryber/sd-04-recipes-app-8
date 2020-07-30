import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Login from './pages/Login';
import MainPage from './pages/Main';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/comidas" component={MainPage} />
      </Switch>
    </Router>
  );
}

export default App;
