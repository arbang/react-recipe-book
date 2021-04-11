import Recipes from '../components/Recipes';
import Header from '../components/Header';
import Search from '../components/Search';

const CategoryType = (e) => {
  const value = e.match.params.category;
  return (
    <div className = 'App'>
        <Header className='App-header'/>
        <Search/>
        <Recipes categories={value}/>
    </div>
  );
};
export default CategoryType;
