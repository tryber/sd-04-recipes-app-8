import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import fetchThemealAPI, { requestResetAPI, requestResetRecipes } from '../actions/themealdb';
import { searchResultMoreOne } from '../actions/searchBarAction';

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

const routingAfterAPI = (recipes, dispatch, searchSetting, setSearchSetting) => {
  if (recipes == null) {
    dispatch(requestResetRecipes());
    return alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  }
  if (recipes.length === 1) {
    console.log(' === 1');
    return setSearchSetting({ ...searchSetting, recipesEqualOne: true });
  }
  if (recipes.length > 1) dispatch(searchResultMoreOne());
};

const SearchBar = () => {
  const { recipes } = useSelector((state) => state.ThemealDB);
  const [searchSetting, setSearchSetting] = useState({
    searchedValue: '',
    searchOption: '',
    recipesEqualOne: false,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestResetAPI())
    setSearchSetting({ ...searchSetting, recipesEqualOne: false });
  }, []); //  reset isFetching to false when load
  useEffect(() => { routingAfterAPI(recipes, dispatch, searchSetting, setSearchSetting) },
    [recipes]);
  const submitSearch = () => {
    if (searchSetting.searchOption === 'firstLetter' && searchSetting.searchedValue.length > 1) {
      alert('Sua busca deve conter somente 1 (um) caracter');
    } else {
      dispatch(fetchThemealAPI(searchSetting));
    }
  };

  return (
    <div>
      {searchSetting.recipesEqualOne ? (<Redirect push to={`/comidas/${recipes[0].idMeal}`} />) : null}
      {rendersSearchInput(searchSetting, setSearchSetting)}
      {rendersSearchOption(searchSetting, setSearchSetting)}
      <button data-testid="exec-search-btn" onClick={() => submitSearch()}>
        search
    </button>
    </div>
  );
};

export default SearchBar;
