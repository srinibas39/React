import initialState from "./initialState.json";
import * as authAction from "../action/action"

const authReducer=(state=initialState.auth,action)=>{
    switch(action.type){
        case authAction.SIGN_UP_REQUEST:
            return {...state,loading:true}
        case authAction.SIGN_UP_SUCCESS:
            return {...state,loading:false}   
        case authAction.SIGN_UP_FAIL:
            return {...state,loading:false,error:action.payload}
        case authAction.SIGN_IN_REQUEST:
            return {...state,loading:true}
        case authAction.SIGN_IN_SUCCESS:
            return {...state,loading:false}
        case authAction.SIGN_IN_FAIL:
            return {...state,loading:false,error:action.payload} 
        case authAction.REMOVE_ERROR:
            return {...state,error:""}
        case authAction.SIGN_OUT_FAIL:
            return {...state,loading:false,error:action.payload}       
        default:
            return state;    

    }
}

export default authReducer;


