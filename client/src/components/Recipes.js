import {useContext, useEffect} from 'react';
import Recipe from './Recipe';
import {RecipeContext} from '../context/RecipeContext';

const Recipes = ({categories}) => {
    const {recipes, updateSearch,updateQuery} = useContext(RecipeContext);

    useEffect(()=>{
        if(categories){
            updateSearch(categories);
            updateQuery(categories);
        }
      },[]);

    return (
    <div className='recipes'>
    {recipes.map((recipe)=>{
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