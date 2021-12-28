import { combineReducers } from "redux";
import ballReducer from "./ballReducer";
import batReducer from "./batReducer";


const rootReducer=combineReducers({
    bat:batReducer,
    ball:ballReducer
})

export default rootReducer;