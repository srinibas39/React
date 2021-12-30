import shopReducer from "./shopReducer";
import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension" 


const store=createStore(shopReducer,composeWithDevTools());


export default store;