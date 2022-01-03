import initialState from "./initialState.json";
import * as documentAction from "../action/action";


const documentReducer=(state=initialState.document,action)=>{
   switch(action.type){

        case documentAction.SET_DOCUMENT:
            return {...state,id:action.payload.id,skinCd:action.payload.skinCd}
        case documentAction.UPDATE_DOCUMENT:
            return {...state,skinCd:action.payload.skinCd}
       default:
           return state;
   }
}

export default documentReducer;