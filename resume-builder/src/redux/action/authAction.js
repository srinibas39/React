import * as actionTypes from "./action";

//signup

 const signupReq=()=>{
    return {type:actionTypes.SIGN_UP_REQUEST}
}

 const signupSuc=()=>{
    return {type:actionTypes.SIGN_IN_SUCCESS}
}

 const signupFail=(err)=>{
    return {type:actionTypes.SIGN_UP_FAIL,payload:err.message}
}

 const removeError=()=>{
    return {type:actionTypes.REMOVE_ERROR}
}

export const signup=(userData)=>{
   return (dispatch,getState,{getFirebase,getFirestore})=>{
        dispatch(signupReq())
        const firebase=getFirebase();
        const firestore=getFirestore();

        firebase.auth().createUserWithEmailAndPassword(userData.email,userData.password).then(async(data)=>{
         const res =await firestore.collection("users").doc(data.user.uid).set({
              email:userData.email,
              resumeIds:[]
          })
            //success
            dispatch(signupSuc());   
        }).catch((err)=>{
            dispatch(signupFail(err));
            setTimeout(dispatch(removeError()),2000)
        })

   }
}

//signin

const signinReq=()=>{
    return{type:actionTypes.SIGN_IN_REQUEST}
}

const signinSuc=()=>{
    return {type:actionTypes.SIGN_IN_SUCCESS}
}

const signinFail=(error)=>{
    return {type:actionTypes.SIGN_IN_FAIL,payload:error.message}
}

export const signin=(userData)=>{
   return async(dispatch,getState,{getFirestore,getFirebase})=>{
         
       dispatch(signinReq())

       const firebase=getFirebase();
       
       try{

           const res=await firebase.auth().signWithEmailAndPassword(userData.email,userData.password);
           dispatch(signinSuc());
       }
       catch(err){
           dispatch(signinFail(err));
           setTimeout(dispatch(removeError()),2000)
       }
    

   }
}

//signout

export const signout=()=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{
      const firebase=getFirebase();
      firebase.auth().signOut().then(()=>{
          dispatch({type:actionTypes.SIGN_OUT_SUCCESS})
      }).catch((error)=>{
           dispatch({type:actionTypes.SIGN_OUT_FAIL,payload:error.message})
           setTimeout(dispatch(removeError),2000)
      })

     
      
    
    }
}



