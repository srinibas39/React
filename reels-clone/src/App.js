import React from 'react'
import SignUp from './components/signUp'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import { AuthProvider } from './context/AuthContext';
import Feed from './components/feed';
import PrivateRoute from './components/PrivateRoute';
import ForgotP from './components/forgotp';
import "./App.css"



let App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>

          <Switch>
            <Route  path="/forgotp" component={ForgotP} />
            <Route  path="/signUp" component={SignUp} />
            <Route  path="/login" component={Login} />
            <Route path="/" component={Feed} />
            

          </Switch>


        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App;
