import React from 'react'
import SignUp from './components/signUp'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  
} from "react-router-dom";
import Login from './components/Login'



let App=()=>{
  return (
    <>
    <BrowserRouter>
     
        <Route exact path="/signUp" component={SignUp}/> 
        <Route exact path="/login" component={Login}/>  
     
    
    
    
    </BrowserRouter>
    </>
  )
}

export default App;
