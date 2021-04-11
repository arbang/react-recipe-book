import { FaTrashAlt } from 'react-icons/fa';
import { GrAdd } from 'react-icons/gr';
import { AiFillHeart } from 'react-icons/ai';


import {RecipeContext} from '../context/RecipeContext';
import {useContext, useState} from 'react';

const Recipe = ({label,totalTime, image, url,isBookmark, id}) => {
    const {deleteBookmark, addBookmark} = useContext(RecipeContext);
    const [clicked, setClick] = useState(true);
    
    const deleteBkmk = () => {
        deleteBookmark (id);
    }

    const addBkmk = () => {
        addBookmark({label,image,totalTime,url});
        setClick(!clicked);
        
    }

    return (
        <div className ='recipe'>
       { !isBookmark && clicked && (<GrAdd className = 'icon' onClick = {addBkmk}/>)}
       { !isBookmark && !clicked && (<AiFillHeart className = 'icon'/>)}

       { isBookmark && (<FaTrashAlt className='icon' onClick={deleteBkmk}/>)}
        <a href ={url}>
            <h3 type="text">{label}</h3>
            <img src={image} alt="{label}"/>
            <p>Total Cook Time: {totalTime} min</p>
        </a>
        
        </div>
    )
}

export default Recipe
