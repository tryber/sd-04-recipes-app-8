import React from 'react';
import { useDispatch, connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import ExploreHeader from '../components/ExploreHeader';
import Footer from '../components/Footer';

import FetchRandomAPI from '../actions/RandomActions';

const ExploreDrinksOrMeals = ({ id }) => {
  const dispatch = useDispatch();
  const initialPath = window.location.pathname.slice(9, 17);
  const pageURL = window.location.pathname;
  const recipeType = pageURL === '/explorar/comidas' ? 'Meal' : 'Drink';
  const headerTitle =
    pageURL === '/explorar/comidas' ? 'Explorar Comidas' : 'Explorar Bebidas';

  if (id.length > 0) {
    return <Redirect to={`${initialPath}/${id[0][`id${recipeType}`]}`} />;
  }

  return (
    <div>
      <ExploreHeader title={headerTitle} />
      <Link to={`${pageURL}/ingredientes`}>
        <button type="button" data-testid="explore-by-ingredient">
          Por Ingredientes
        </button>
      </Link>
      {pageURL === '/explorar/comidas' && (
        <Link to={`${pageURL}/area`}>
          <button type="button" data-testid="explore-by-area">
            Por Local de Origem
          </button>
        </Link>
      )}
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={() => dispatch(FetchRandomAPI(initialPath))}
      >
        Me Surpreenda!
      </button>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  id: state.DetailReducer.id,
});

ExploreDrinksOrMeals.propTypes = {
  id: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, null)(ExploreDrinksOrMeals);
