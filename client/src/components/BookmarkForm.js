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
            {!toggle && (
            <div className='container'>
  
            <form title='Add a Bookmark' onSubmit={onSubmit}>
            <div><h3> Add a Bookmark</h3>
            </div>
                <label>
                    Title
                    <div>
                    <input type="text" value={label} onChange={(e)=> setLabel(e.target.value)}/>
                    </div>
                </label>
                <label>
                    Cook Time
                    <div>
                    <input type="text" value={totalTime} onChange={(e)=> setTotalTime(e.target.value)}/>
                    </div>
                </label>
                <label>
                    Image Url
                    <div>
                    <input type="text" value={image} onChange={(e)=> setImage(e.target.value)}/>
                    </div>
                </label>
                <label>
                    Recipe Url
                    <div>
                    <input type="text" value={url} onChange={(e)=> setUrl(e.target.value)}/>
                    </div>
                </label>
                <div>
                    <input type='submit' value = 'Save'/>
                    <button type='text' onClick = {clearBookmark} value ='Clear Bookmark'>Clear</button>
                </div>
            </form>
            </div>)
            }
            
        </div>
    )
}

export default BookmarkForm
