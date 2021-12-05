import { useState } from "react";


let Us = () => {
    const [count, setCount] = useState(0)
    return <>

        <h1>{`my count is `+count}</h1>
        <button onClick={() => {
            setCount(count + 1);
        }}>Click</button>

    </>
}
export default Us;