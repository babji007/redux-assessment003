import "./App.css";
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Header from "./App/src/components/Header";
import Footer from "./App/src/components/Footer";
import Sys from "./App/src/components/sys";
import List from "./App/src/components/List";
function App() {
  return (
    
      <Router>
      <div class="App" >
        <Header/>
        {/* <Sys /> */}
        {/* <List /> */}
        <Switch>
        <Route exact path='/dropdown' component={Sys} />
        <Route exact path='/todo' component={List} />
        </Switch>
        <Footer/>
      </div>
      </Router>
    
  );
}

export default App;
