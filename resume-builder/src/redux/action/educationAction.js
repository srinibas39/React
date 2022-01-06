import * as educationAction from "./action"

export const setEducation=(education)=>{
    return {type:educationAction.SET_EDUCATION,payload:education}
}

export const updateEducation=(education)=>{
    return {type:educationAction.UPDATE_EDUCATION,payload:education}
}