import {RecipeContext} from '../context/RecipeContext';
import {useState, useContext} from 'react';
const BookmarkForm = () => {
    const {addBookmark} = useContext(RecipeContext); 
    const [label, setLabel] = useState('');
    const [image,setImage] = useState('');
    const [totalTime,setTotalTime] = useState('');
    const [url,setUrl] = useState('');
    const[toggle, setToggle] = useState(true);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({label,image,totalTime,url});
        addBookmark({label,image,totalTime,url});
        clearBookmark();
    }

    const clearBookmark = ()=>{
        setLabel('');
        setImage('');
        setTotalTime('');
        setUrl('');
        setToggle(!toggle);
     };

     const toggleAdd = ()=>{
        setToggle(!toggle);
     }

    return (
        <div>
            {toggle &&  (<div className='search-form'><input className='search-bar bkmk-btn' type="text" onClick={toggleAdd} placeholder='Add a new recipe'/></div>)}
            {!toggle && (<form className='search-form'onSubmit={onSubmit}>
                <div>
                    <input type="text" placeholder="title" value={label} onChange={(e)=> setLabel(e.target.value)}/>
                </div>
                <div>
                    <input type="text" placeholder="cook time" value={totalTime} onChange={(e)=> setTotalTime(e.target.value)}/>
                </div>
                <div>
                    <input type="text" placeholder="img url" value={image} onChange={(e)=> setImage(e.target.value)}/>
                </div>
                    <input type="text" placeholder="link" value={url} onChange={(e)=> setUrl(e.target.value)}/>
                <div>
                    <input type='submit' value = 'Save'/>
                    <button type='text' onClick = {clearBookmark} value ='Clear Bookmark'>Clear</button>
                </div>
            </form>)}
        </div>
    )
}

export default BookmarkForm
