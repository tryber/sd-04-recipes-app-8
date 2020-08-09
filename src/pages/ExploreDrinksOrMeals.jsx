import React from 'react';
import { Link } from 'react-router-dom';

import ExploreHeader from '../components/ExploreHeader';
import Footer from '../components/Footer';

const ExploreDrinksOrMeals = () => {
  const currentLocation = window.location.pathname;
  const surprise = window.location.pathname.slice(9, 17);
  const id = '123456789'; // substituir pelo id da api random
  const headerTitle =
    currentLocation === '/explorar/comidas'
      ? 'Explorar Comidas'
      : 'Explorar Bebidas';

  return (
    <div>
      <ExploreHeader title={headerTitle} />
      <Link to={`${currentLocation}/ingredientes`}>
        <button type="button" data-testid="explore-by-ingredient">
          Por Ingredientes
        </button>
      </Link>
      {currentLocation === '/explorar/comidas' && (
        <Link to={`${currentLocation}/area`}>
          <button type="button" data-testid="explore-by-area">
            Por Local de Origem
          </button>
        </Link>
      )}
      <Link to={`${surprise}/${id}`}>
        <button type="button" data-testid="explore-surprise">
          Me Surpreenda!
        </button>
      </Link>
      <Footer />
    </div>
  );
};

export default ExploreDrinksOrMeals;
