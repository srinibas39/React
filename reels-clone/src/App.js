import React from 'react'
import SignUp from './components/signUp'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import { AuthProvider } from './context/AuthContext';
import Feed from './components/feed';
import PrivateRoute from './components/PrivateRoute';
import ForgotP from './components/forgotp';
import "./App.css"
import Profile from './components/Profile';
import Ioa from './components/Ioa';



let App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>

          <Switch>
            <Route  path="/forgotp" component={ForgotP} />
            <Route  path="/signUp" component={SignUp} />
            <Route  path="/login" component={Login} />
            <Route path="/profile/:id" component={Profile}/>
            <Route path="/" component={Feed} />
            

          </Switch>


        </AuthProvider>
      </BrowserRouter>

      {/* <Ioa/> */}
    </>
  )
}

export default App;
