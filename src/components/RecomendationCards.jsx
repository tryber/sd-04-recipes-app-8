import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './RecipeCards.css';

const RecomendationCards = ({ recomendation, currentLocation }) => {
  const recomendationType = currentLocation === '/comidas' ? 'Drink' : 'Meal';
  const counter = 1;

  return (
    <div className="recomendationContainer">
      {recomendation.slice(0, 6).map((recipe, index) => (
        <div key={recipe[`id${recomendationType}`]}
          style={{ visibility: (counter === index || counter === index + 1) ? 'visible' : 'hidden' }}
          className="reconedationCard"
        >
          <img
            data-testid={`${index}-recomendation-card`}
            src={recipe[`str${recomendationType}Thumb`]}
            alt={`${recomendationType} Card`}
            className="recipe-photo"
          />
          <h3 data-testid={`${index}-recomendation-title`}>
            {recipe[`str${recomendationType}`]}
          </h3>
        </div>
      ))
      }
    </div>
  );
};

const mapStateToProps = (state) => ({
  recomendation: state.DetailReducer.recomendation,
  currentLocation: state.updateLocation.currentLocation,
});

RecomendationCards.propTypes = {
  recomendation: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentLocation: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(RecomendationCards);
