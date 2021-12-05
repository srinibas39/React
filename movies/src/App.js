import Header from "./components/Header"
import Banner from "./components/Banner"
import "./App.css"
import List from "./components/List"
import Favorites from "./components/Favorites";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
let App = () => {
    return <>
       <Router>
           <Header/>
           <Switch>
               <Route exact path="/">
                   <>
                    <Banner/>
                    <List/>
                   </>
               </Route>
               <Route exact path="/favorites">
                   <Favorites/>
               </Route>

           </Switch>

       </Router>
     
       
    </>
}

export default App;