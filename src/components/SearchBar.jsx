import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import fecthThemealAPI from '../actions/themealdb';

const rendersSearchInput = (searchSetting, setSearchSetting) => (
  <label htmlFor="searchInput">
    searchedValue
    <input
      name="searchedValue"
      type="text"
      value={searchSetting.searchedValue}
      data-testid="search-input"
      onChange={(event) =>
        updateSearchBar(event, searchSetting, setSearchSetting)
      }
    />
  </label>
);

const rendersSearchOption = (searchSetting, setSearchSetting) => (
  // must be refactored with map
  <div>
    <form>
      <label htmlFor="searchedOption">
        ingredient
    <input
          name="searchOption"
          type="radio"
          value="ingredient"
          data-testid="ingredient-search-radio"
          onChange={(event) =>
            updateSearchBar(event, searchSetting, setSearchSetting)
          }
        />
      </label>
      <label htmlFor="searchedOption">
        Nome
    <input
          name="searchOption"
          type="radio"
          value="name"
          data-testid="name-search-radio"
          onChange={(event) =>
            updateSearchBar(event, searchSetting, setSearchSetting)
          }
        />
      </label>
      <label htmlFor="searchedOption">
        Primeira letra
    <input
          name="searchOption"
          type="radio"
          value="firstLetter"
          data-testid="name-search-radio"
          onChange={(event) =>
            updateSearchBar(event, searchSetting, setSearchSetting)
          }
        />
      </label>
    </form>
  </div>

)

const updateSearchBar = (event, searchSetting, setSearchSetting) => {
  setSearchSetting({ ...searchSetting, [event.target.name]: event.target.value })
}

const SearchBar = () => {
  const [searchSetting, setSearchSetting] = useState({
    searchedValue: '',
    searchOption: '',
  });
  const dispatch = useDispatch();
  return (
    <div>
      {rendersSearchInput(searchSetting, setSearchSetting)}
      {rendersSearchOption(searchSetting, setSearchSetting)}
    <button onClick={() => dispatch(fecthThemealAPI(searchSetting))}>
      search
    </button>
    </div>

  );
};

export default SearchBar;