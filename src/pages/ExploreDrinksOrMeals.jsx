import React from 'react';
import { useDispatch, connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import ExploreHeader from '../components/ExploreHeader';
import Footer from '../components/Footer';

import FetchRandomAPI from '../actions/RandomActions';

const ExploreDrinksOrMeals = ({ id, currentLocation }) => {
  const dispatch = useDispatch();
  const surprise = window.location.pathname.slice(9, 17);
  const recipeType = currentLocation === '/comidas' ? 'Meal' : 'Drink';
  const headerTitle =
    currentLocation === '/explorar/comidas'
      ? 'Explorar Comidas'
      : 'Explorar Bebidas';

  if (id.length > 0)
    return <Redirect to={`${surprise}/${id[0][`id${recipeType}`]}`} />;

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
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={() => dispatch(FetchRandomAPI())}
      >
        Me Surpreenda!
      </button>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  id: state.DetailReducer.id,
  currentLocation: state.updateLocation.currentLocation,
});

ExploreDrinksOrMeals.propTypes = {
  id: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentLocation: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(ExploreDrinksOrMeals);
