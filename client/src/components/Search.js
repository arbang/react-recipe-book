import {useContext} from 'react';
import {RecipeContext} from '../context/RecipeContext';

const Search = () => {
    const {updateSearch, updateQuery, search} = useContext(RecipeContext);
    return (
     <form className='search-form' onSubmit={updateQuery}>
        <input className='search-bar' type='text' placeholder='Search' value={search} onChange={updateSearch}/>
      </form>
    )
}

export default Search
