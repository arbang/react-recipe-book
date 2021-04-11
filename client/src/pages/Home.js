import Recipes from '../components/Recipes';
import Header from '../components/Header';
import Search from '../components/Search';

const Home = () => {
  return (
    <div>
        <Header/>
        <Search/>
       <Recipes/>
    </div>
  );
};
export default Home;
