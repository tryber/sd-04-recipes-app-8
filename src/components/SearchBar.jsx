import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import fetchThemealAPI from '../actions/themealdb';

const updateSearchBar = (event, searchSetting, setSearchSetting) => {
  setSearchSetting({ ...searchSetting, [event.target.name]: event.target.value });
};

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

const rendersSearchOption = (searchSetting, setSearchSetting) => {
  const searchOptionInput = [{ label: 'ingredient', value: 'ingredient', testid: 'ingredient-search-radio' },
  { label: 'Nome', value: 'name', testid: 'name-search-radio' },
  { label: 'Primeira letra', value: 'firstLetter', testid: 'first-letter-search-radio' },
  ];
  return (
    <div>
      <form>
        {searchOptionInput.map((item) => (
          <label htmlFor="searchedOption" key={item.label}>
            {item.label}
            <input
              name="searchOption"
              type="radio"
              value={item.value}
              data-testid={item.testid}
              onChange={(event) =>
                updateSearchBar(event, searchSetting, setSearchSetting)
              }
            />
          </label>
        ))
        }
      </form>
    </div>
  );
};

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchSetting, setSearchSetting] = useState({
    searchedValue: '',
    searchOption: '',
  });

  const submitSearch = () => {
    if (searchSetting.searchOption === 'firstLetter' && searchSetting.searchedValue.length > 1) {
      alert('Sua busca deve conter somente 1 (um) caracter')
    }
    else {
      dispatch(fetchThemealAPI(searchSetting))
    }
  };

  return (
    <div>
      {rendersSearchInput(searchSetting, setSearchSetting)}
      {rendersSearchOption(searchSetting, setSearchSetting)}
      <button data-testid="exec-search-btn" onClick={() => submitSearch()}>
        search
    </button>
    </div>
  );
};

export default SearchBar;
