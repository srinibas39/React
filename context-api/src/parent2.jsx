import { useContext } from "react";
import context from "./context";


let Parent2=()=>{
    let theme=useContext(context)
    console.log("parent2")
    return <>

    <h1 className={theme?`dark`:`light`}>I am 2nd parent component</h1>
    </>

}

export default Parent2;