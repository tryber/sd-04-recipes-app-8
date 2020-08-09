import React, { useState, useEffect } from 'react';


import ExploreHeader from '../components/ExploreHeader';

const FavoriteRecipes = () => {
  let readingLocalStorageSuccess = false;
  useEffect(() => {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    readingLocalStorageSuccess = true;
    console.log("favoriteRecipes", favoriteRecipes, readingLocalStorageSuccess);
  }, []);
 let favoriteRecipes = []
 console.log("favoriteRecipes 2", favoriteRecipes, readingLocalStorageSuccess);
  return (
    <>
    <div>
      <ExploreHeader title={'Receitas Favoritas'} />
      <div>
      {favoriteRecipes !=null || favoriteRecipes !=[] && <h1>test</h1>}
      {/* {readingLocalStorageSuccess && favoriteRecipes.map((recipe) => (
        // <h3>{recipe.name}</h3>
        
        
      ))
    } */}
    </div>
    </div>
</>
  )
};


export default FavoriteRecipes;
