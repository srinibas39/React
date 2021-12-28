
import store from "./redux/store";
import Bat from "./bat";
import Ball from "./ball"
import {Provider} from "react-redux"
function App() {
  return <>
  <Provider store={store}>
     <Bat/>
     <Ball/>
  </Provider>
  
  </>
}

export default App;
