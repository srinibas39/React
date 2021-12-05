import { useState } from "react";

let Calculator=()=>{
  let [state,setState]=useState(0)
  return(
    <>
    <button onClick={()=>{
        setState(state+1);
    }}>+</button>
    <p>{state}</p>
    <button onClick={()=>{
        if(state>0){
            setState(state-1);
        }
    }}>-</button>
    </>
  )
}

export default Calculator;