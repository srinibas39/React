import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

let ForgotP=()=>{
    const {forgot}=useContext(AuthContext);
    const [email,setEmail]=useState("");
    let handleClick=async ()=>{
        try{
           let res=await forgot(email);
        }
        catch(error){
            console.log(error)
        }
    }
    return (
        <div>
            <label for="email" >Email</label>
            <input type="text" class="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            <button onClick={()=>{handleClick()}}>click</button>
        </div>
    )
}

export default ForgotP;