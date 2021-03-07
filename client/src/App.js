import './App.css';
// import './bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Favorites from './pages/Favorites';
import Types from './pages/Types';

import {RecipeProvider} from './context/RecipeContext';

const App = () => {
 
  return (
    <div className = 'App'>
      <RecipeProvider>
        <Router>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/favorites' component={Favorites} />
              <Route exact path='/types' component={Types} />

          </Switch>
        </Router>
      </RecipeProvider>
    </div>
  )
}

export default App;
