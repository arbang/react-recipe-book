import {RecipeContext} from '../context/RecipeContext';

const BookmarkForm = () => {
    const [addBookmark, bookmark] = RecipeContext; 
    return (
        <form>
            <input type="text" placeholder="label" value={}></input>
            
        </form>
    )
}

export default BookmarkForm
