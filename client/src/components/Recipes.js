import {useContext} from 'react';
import Recipe from './Recipe';
import {RecipeContext} from '../context/RecipeContext';

const Recipes = () => {
    const {recipes} = useContext(RecipeContext);

    return (
    <div className='recipes'>
    {recipes.map((recipe)=>{
        console.log(recipe);
        return (<Recipe key={recipe.recipe.label}  
            label={recipe.recipe.label} 
            totalTime = {recipe.recipe.totalTime} 
            image={recipe.recipe.image}
            url={recipe.recipe.url}/>)
    })}
    </div>
    )
}

export default Recipes