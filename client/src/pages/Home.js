// import React, { useContext, useEffect } from 'react';
import Recipes from '../components/Recipes';
import Header from '../components/Header';
import Search from '../components/Search';
// import {RecipeContext} from '../context/RecipeContext';

const Home = () => {
  return (
    <div className = 'App'>
        <Header className='App-header'/>
        <Search />
       <Recipes/>
    </div>
  );
};
export default Home;
