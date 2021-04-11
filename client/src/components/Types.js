// import Recipe from './Recipe';
// import {RecipeContext} from '../context/RecipeContext';
// import {RecipeContext} from '../context/RecipeContext';
// import {useContext} from 'react';

const Types = () => {
    // const {types} = useContext(RecipeContext);

    return (
    <div className='recipes'>
    {/* <span className='category'> */}
        <dia href='/categories/breakfast' className= 'category' id='breakfast' value='breakfast'>
            <h2>Breakfast</h2>
        </dia>
        <a href='/categories/lunch' className= 'category' id='lunch'>
            <h2>Lunch</h2>
        </a>
        <a href='/categories/dinner' className= 'category' id='dinner'>
            <h2>Dinner</h2>
        </a>
        <a href='/categories/snacks' className= 'category' id='snacks'>
            <h2>Snacks</h2>
        </a>
        <a href='/categories/drinks' className= 'category' id='drinks'>
            <h2>Drinks</h2>
        </a>
        <a href='/categories/desserts' className= 'category' id='desserts'>
            <h2>Desserts</h2>
        </a>
       <a href='/categories/american' className= 'category' id='american'>
            <h2>American</h2>
        </a>
        <a href='/categories/asian' className= 'category' id='asian'>
            <h2>Asian</h2>
        </a>
        <a href='/categories/italian' className= 'category' id='italian'>
            <h2>Italian</h2>
        </a>
        </div>
    )
}

export default Types;