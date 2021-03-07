import {
  GET_RECIPES,
  SET_SEARCH,
  SET_QUERY,
  ADD_BOOKMARK,
  GET_BOOKMARKS
} from '../types';

const recipeReducer =  (state, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
         recipes: action.payload,
    }
    case GET_BOOKMARKS:
      return {
        ...state,
         bookmarks: action.payload,
    }
    case SET_SEARCH:
      return {
        ...state,
        search: action.payload,
      }
    case SET_QUERY:
      return {
        ...state,
        query: state.search,
        search: '',
    }
    case ADD_BOOKMARK:
      return {
        ...state,
        bookmarks: [action.payload, ...state.bookmarks],
        bookmark: true
    }
    default:
      return state;
  }
};

export default recipeReducer;
