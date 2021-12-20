import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import {Route} from "react-router-dom";
import {Redirect} from "react-router";

let PrivateRoute=({component:Component,...rest})=>{
    const {user}=useContext(AuthContext)
    return <>

    <Route {...rest} render={props=>{
        user?<Component {...props}/>:<Redirect to="login"/>
    }}/>
    </>
}

export default PrivateRoute;