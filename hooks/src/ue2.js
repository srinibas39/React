import { useEffect, useState } from "react";


let Ue2 = () => {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        console.log("useEffect");
        document.title=`you have clicked ${count} times`
        // setCount(100);
        // setCount(Math.random()*100);
    },[])
    console.log("render");
    return <>

        <h1>{`my count is `+count}</h1>
        <button onClick={() => {
            setCount(count + 1);
        }}>Click</button>

    </>
}
export default Ue2;