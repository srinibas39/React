import { useContext } from "react";
import context from "./context";

let Navbar=()=>{
    const theme= useContext(context);
    console.log("navbar")
    return <>
   
    <h1 className={theme?`dark`:`light`}>Hello I am Navbar</h1>
    </>
}

export default Navbar;