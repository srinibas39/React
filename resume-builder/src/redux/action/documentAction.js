import * as documentAction from "./action"
import { v4 as uuidv4 } from 'uuid';

export const setDocument=(skinCd)=>{
    return {
        type:documentAction.SET_DOCUMENT,payload:{id:uuidv4(),skinCd:skinCd}
    }
}

export const updateDocument=(skinCd)=>{
    return {
        type:documentAction.UPDATE_DOCUMENT,payload:{skinCd:skinCd}
    }
}