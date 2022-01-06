import * as contactAction from "./action"

export const setContact=(contact)=>{
    return {type:contactAction.SET_CONTACT,payload:contact}
}

export const updateContact=(contact)=>{
    return {type:contactAction.UPDATE_CONTACT,payload:contact}
}