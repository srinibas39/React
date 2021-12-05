import { useState } from "react";
let App=()=>{

  let [tasks,setTasks]=useState([{task:"learn coding"},{task:"check your mail"}])
  let [currTask,setCurrTask]=useState("");
  console.log(tasks);

  return(<>
    <input value={currTask} onChange={(e)=>{
      setCurrTask(e.target.value);
    }} type="text"/>
    <button onClick={()=>{
      setTasks([...tasks,{task:currTask}])
    }}>submit</button>
    <ul>
      {
         tasks.map((el,idx)=>{
                
            return <div className="task-comp">
              <li key={idx}>{el.task}</li>
               <button onClick={()=>{
                    let narr=tasks.filter((ele)=>{
                       return ele!=el
                    })
                    setTasks(narr);

               }}>delete</button>
            </div>
         })
      }
    </ul>
  </>)
}
export default App;
