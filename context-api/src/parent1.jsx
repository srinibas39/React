import { useContext } from "react";
import Child from "./child";
import context from "./context";


let Parent1=()=>{
    let theme=useContext(context)
    console.log("parent1")
    return <div className={theme?`dark`:`light`}>
       

        <h1>I am a parent company</h1>
        <Child/>
       
    </div>
  
}

export default Parent1;