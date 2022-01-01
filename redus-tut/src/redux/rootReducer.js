import { combineReducers } from "redux";
import ballReducer from "./ballReducer";
import batReducer from "./batReducer";
import userReducer from "./userReducer";


const rootReducer=combineReducers({
    bat:batReducer,
    ball:ballReducer,
    user:userReducer,
})

export default rootReducer;