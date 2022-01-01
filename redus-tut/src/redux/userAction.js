import * as actionTypes from "./action"
import axios from "axios"
const fetchReq=()=>{
    return {type:actionTypes.FETCH_REQ}
}

const fetchSuc=(users)=>{
    return {type:actionTypes.FETCH_SUC,payload:users}
}

const fetchFail=(error)=>{
    return {type:actionTypes.FETCH_FAIL,payload:error.message}
}


export const fetchUsers=()=>{
    //thunk middleware
    return async (dispatch)=>{
        dispatch(fetchReq())
        try{
            const res=await axios.get("https://jsonplaceholder.typicode.com/users");
            const data=res.data;
            dispatch(fetchSuc(data))
        }
        catch(err){
            dispatch(fetchFail(err))
        }
    }
}