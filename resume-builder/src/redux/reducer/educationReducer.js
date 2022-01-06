import * as EducationAction from "../action/action"
import initialState from "./initialState.json"

const educationReducer=(state=initialState.education,action)=>{
    switch(action.type){
        case EducationAction.SET_EDUCATION:
            return {...action.payload}
        case EducationAction.UPDATE_EDUCATION:
            return {...action.payload}    
        default:
            return state;    
    }
}

export default educationReducer;