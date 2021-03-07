import Bookmarks from '../components/Bookmarks';
import Header from '../components/Header';
import BookmarkForm from '../components/BookmarkForm';

const Favorites = () => {

  return (
    <div className = 'App'>
        <Header className='App-header'/>
        <BookmarkForm/>
        <Bookmarks/>
    </div>
  );
};
export default Favorites;
