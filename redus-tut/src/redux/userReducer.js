import * as actionType from "./action"
const initialState={
    users:[],
    loading:false,
    error:""
}

const userReducer=(state=initialState,action)=>{
    switch(action.type){
      case actionType.FETCH_REQ:
        return {
          ...state,loading:true
        }
      case actionType.FETCH_SUC:
        return {
          ...state,loading:false,users:[...action.payload]
        }
      case actionType.FETCH_FAIL:
        return {
          ...state,loading:false,error:action.payload
        } 
      default:
        return state; 
    }
}

export default userReducer;