import {useContext} from 'react';
import Recipe from './Recipe';
import {RecipeContext} from '../context/RecipeContext';
const Types = () => {

    // const {types} = useContext(RecipeContext);

    return (
    <div className='recipes'>
        <div className = 'recipe'>
            <h2>Breakfast</h2>
        </div>
        <div className = 'recipe'>
            <h2>Lunch</h2>
        </div>
        <div className = 'recipe'>
            <h2>Dinner</h2>
        </div>
    </div>
    )
}

export default Types;