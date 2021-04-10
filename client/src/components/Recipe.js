import { FaTrashAlt } from 'react-icons/fa';
import { GrAdd } from 'react-icons/gr';

import {RecipeContext} from '../context/RecipeContext';
import {useContext} from 'react';

const Recipe = ({label,totalTime, image, url,isBookmark, id}) => {
    const {deleteBookmark, addBookmark} = useContext(RecipeContext);

    const deleteBkmk = () => {
        deleteBookmark (id);
    }

    const addBkmk = () => {
        addBookmark({label,image,totalTime,url});
    }

    return (
        <div className ='recipe'>
       { !isBookmark && (<GrAdd className = 'icon' onClick = {addBkmk}/>
)}     { isBookmark && (<FaTrashAlt className='icon' onClick={deleteBkmk}/>)}
        <a href ={url}>
            <h3 type="text">{label}</h3>
            <img src={image} alt="{label}"/>
            <p>Total Cook Time: {totalTime} min</p>
        </a>
        
        </div>
    )
}

export default Recipe
