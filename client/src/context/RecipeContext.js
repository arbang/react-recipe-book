import { useReducer, createContext, useEffect } from 'react';
import recipeReducer from './recipeReducer';
import axios from 'axios';
import {
    GET_RECIPES,
    SET_SEARCH,
    SET_QUERY,
    ADD_BOOKMARK,
    GET_BOOKMARKS
} from '../types';


export const RecipeContext = createContext();
export const RecipeProvider = (props) => {    
    const initialState = {
        recipes: [],
        bookmarks:[],
        query: 'chicken',
        search: '',
        bookmark: false
      };


    const appId='f46fa31d';
    const appKeys = '64378b4e2b04389ab9f469b8f1a9e062';
    const [state, dispatch] = useReducer(recipeReducer, initialState);
    
    useEffect(()=>{
      getRecipes();
    },[state.query]);
    useEffect(()=>{
      getBookmarks();
    },[state.bookmark]);
    
    const getRecipes = async ()=>{
      const res = await axios.get(`https://api.edamam.com/search?q=${state.query}&app_id=${appId}&app_key=${appKeys}`);
      dispatch({ type: GET_RECIPES, payload: res.data.hits });
    }
    
    const getBookmarks = async () => {
      const res = await axios.get('/api/recipes');
      dispatch({ type: GET_BOOKMARKS, payload: res.data});
    // } 
    // catch (err) {
    //   dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
    }
    const updateSearch = (e)=>{
      dispatch({ type: SET_SEARCH, payload: e.target.value });

    }
  
    const updateQuery = (e)=>{
      e.preventDefault();
      dispatch({ type: SET_QUERY, payload: e.target.value });
    }

    const addBookmark = async (recipe)=>{
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
        const res = await axios.post('/api/recipes', recipe, config);
        dispatch({ type: ADD_BOOKMARK, payload: res.data});
        console.log('this is all the ookmarks')
        console.log(state.bookmarks);
    }

    
    return (
    <RecipeContext.Provider
      value={{
          recipes: state.recipes, 
          bookmarks: state.bookmarks,
          search: state.search,
          query: state.query,
          bookmark: state.bookmark,
          getRecipes,
          updateSearch,
          updateQuery,
          addBookmark,
          getBookmarks
      }}
    >
      {props.children}
    </RecipeContext.Provider>
    );
}
