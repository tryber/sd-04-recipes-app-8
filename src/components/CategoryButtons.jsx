import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import './CategoryButtons.css'

import FetchThemealAPI from '../actions/themealdb';

const CategoryButtons = ({ categories }) => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState('');
  const toggleFilter = (value) => {
    if (selectedCategory === value) {
      dispatch(FetchThemealAPI({ searchedValue: '' }));
      setSelectedCategory('');
    } else {
      dispatch(
        FetchThemealAPI({
          searchOption: 'category',
          searchedValue: value,
        }),
      );
    }
  };

  const handleClick = (value) => {
    setSelectedCategory(value);
    toggleFilter(value);
  };

  return (
    <div>
      <div className="category-btns">
      <button
        className="btn1"
        data-testid="All-category-filter"
        type="button"
        onClick={() => dispatch(FetchThemealAPI({ searchedValue: '' }))}
      >
        All
      </button>
      {categories.slice(0, 5).map((item) => (
        <button
          className="btn2"
          data-testid={`${item.strCategory}-category-filter`}
          key={item.strCategory}
          value={item.strCategory}
          type="button"
          onClick={(event) => handleClick(event.target.value)}
        >
          {item.strCategory}
        </button>
      ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  categories: state.CategoriesReducer.categories,
});

CategoryButtons.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, null)(CategoryButtons);
