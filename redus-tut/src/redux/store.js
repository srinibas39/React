import batReducer from "./batReducer";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";



// const store=createStore(batReducer,composeWithDevTools());
const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))

export default store;