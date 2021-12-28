import batReducer from "./batReducer";
import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension"



const store=createStore(batReducer,composeWithDevTools());

export default store;