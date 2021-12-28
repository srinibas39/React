
import store from "./redux/store";
import Bat from "./bat";
import {Provider} from "react-redux"
function App() {
  return <>
  <Provider store={store}>
     <Bat/>
  </Provider>
  
  </>
}

export default App;
