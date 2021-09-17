
import './App.css';
// import List from './components/List';
// import { BrowserRouter as Router, HashRouter,Switch, Route, Link } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';

import { Provider } from 'react-redux';
import Dropdown from './components/Dropdown';
// import Dd from './components/Dd';
import Sys from '../src/components/sys';
import Store from './Store/Store';
// import ListProduct from './components/ListProduct';
// import content from '../src/mock/mockcontent';
// import FavouriteTeam from './components/FavoriteTeam';


// import AddProduct from './components/AddProduct';

function App() {
  return (

    <Provider store={Store}>
    {/* <Router> */}
    <div class="App">
    {/* <Header/> */}
    {/* <FavouriteTeam/> */}
   <Sys/>
    {/* <Dd  /> */}
    {/* <List/>
    <ListProduct/> */}
    
    {/* <Dropdown/> */}

   
        
    {/* <Footer/> */}
    </div>
    {/* </Router> */}
    </Provider>
  );
}

export default App;
