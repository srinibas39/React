
import store from "./redux/store";
import Bat from "./bat";
import Ball from "./ball"
import {Provider} from "react-redux"
import User from "./User";
function App() {
  return <>
  <Provider store={store}>
     <Bat/>
     <Ball/>
     <User/>
  </Provider>
  
  </>
}

export default App;
