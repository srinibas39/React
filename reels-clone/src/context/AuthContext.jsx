import React, { createContext, useEffect, useState } from "react";
import { auth } from "../components/firebase";

export const AuthContext=createContext();

export function AuthProvider({children}){
    const[user,setUser]=useState("");
    const[loading,setLoading]=useState(true);

    function signup(email,password){
       return auth.createUserWithEmailAndPassword(email,password);
    }
    function login(email,password){
        return auth.signInWithEmailAndPassword(email,password);
    }
 
    function logout(){
        return auth.signOut()
    }
    function forgot(email){
        return auth.sendPasswordResetEmail(email)
    }
    useEffect(()=>{
        let unsub=auth.onAuthStateChanged((user)=>{
            setUser(user);
            setLoading(false);
        })
        return()=>{
            unsub();//clean up
        }
    },[])

    const store={
        user,
        signup,
        login,
        logout,
        forgot,
    }
  return (
      <AuthContext.Provider value={store}>{!loading && children}</AuthContext.Provider>
  )

}


