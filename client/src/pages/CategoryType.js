import Recipes from '../components/Recipes';
import Header from '../components/Header';

const CategoryType = (e) => {
  const value = e.match.params.category;
  return (
    <div className = 'App'>
        <Header className='App-header'/>
        <Recipes categories={value}/>
    </div>
  );
};
export default CategoryType;
