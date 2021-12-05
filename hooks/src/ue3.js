import { useEffect, useState } from "react";


let Ue3 = () => {
    const [count, setCount] = useState(0)
    const [text,setText]=useState("");
    useEffect(()=>{
        console.log("useEffect");
        document.title=`you have clicked ${count} times`
        // setCount(100);
        // setCount(Math.random()*100);
    },[count])
    console.log("render");
    return <>

        <h1>{`my count is `+count}</h1>
        <button onClick={() => {
            setCount(count + 1);
        }}>Click</button>
        <button onClick={()=>{
           setText("Hello")
        }}>click</button>

    </>
}
export default Ue3;