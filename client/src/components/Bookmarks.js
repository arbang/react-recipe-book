import {useContext} from 'react';
import Recipe from './Recipe';
import {RecipeContext} from '../context/RecipeContext';

const Bookmarks = () => {

    const {bookmarks} = useContext(RecipeContext);

    return (
    <div className='recipes'>
    {bookmarks.map((recipe)=>{
        return (<Recipe key={recipe.label}  
            label={recipe.label} 
            totalTime = {recipe.totalTime} 
            image={recipe.image}
            url={recipe.url}/>)
    })}
    </div>
    )
}

export default Bookmarks;