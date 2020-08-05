import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { filterByCategory } from '../actions/index';

const CategoryButtons = ({ setCategory, categories }) => (
  <div>
    <button type="button" onClick={() => setCategory('')}>
      All
    </button>
    {categories.slice(0, 5).map((item) => (
      <button
        data-testid={`${item.strCategory}-category-filter`}
        key={item.strCategory}
        type="button"
        onClick={() => setCategory(item.strCategory)}
      >
        {item.strCategory}
      </button>
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  categories: state.CategoriesReducer.categories,
});

const mapDispatchToProps = (dispatch) => ({
  setCategory: (payload) => dispatch(filterByCategory(payload)),
});

CategoryButtons.propTypes = {
  setCategory: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryButtons);
