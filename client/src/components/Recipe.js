// import {useContext} from 'react';
// import {RecipeContext} from '../context/RecipeContext';

const Recipe = ({label,totalTime, image, url}) => {

    // const {bookmarks} = useContext(RecipeContext);
  //  const bookmarked = bookmarks.find(recipe=>(recipe.label===label));
    
    return (
        <a href ={url} className='recipe'>
            <h3 type="text">{label}
                <input type='checkbox'/>
            </h3>
            <img src={image} alt=""/>
            <p>Total Cook Time: {totalTime} min</p>
        </a>
    )
}

export default Recipe
