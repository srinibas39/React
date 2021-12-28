import batReducer from "./batReducer";
import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
import rootReducer from "./rootReducer";



// const store=createStore(batReducer,composeWithDevTools());
const store=createStore(rootReducer,composeWithDevTools())

export default store;