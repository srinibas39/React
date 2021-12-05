import { useState } from "react";
import "./Body.css"

let Body = () => {
  const [tasks, setTasks] = useState([
    { text: "Learn react", num: 9861123408, email: "srinibas39@gmail.com" },
  ]);
  const [t, setT] = useState(""); //t=>text;
  const [p, setP] = useState(0); //p=>phone;
  const [e, setE] = useState(""); //e=>email
   
  return (
    <div className="Body">

     <div className="input-area">

      <label htmlFor="text">Name</label>
      <input
        value={t}
        onChange={(e) => {
          setT(e.target.value);
        }}
        type="text"
        id="text"
      />

      <label htmlFor="number">Phn no</label>
      <input
        value={p}
        onChange={(e) => {
          setP(e.target.value);
        }}
        type="number"
        id="number"
      />

      <label htmlFor="email">Email</label>
      <input
        value={e}
        onChange={(e) => {
          setE(e.target.value);
        }}
        type="email"
        id="email"
      />

      <button className="submit"
        onClick={() => {
          setTasks([...tasks, { text: t, num: p, email: e }]);
        }}
      >
        submit
      </button>
     </div>
      <ul>
         {
              tasks.map((el,idx)=>{
                  return <div key={idx}>
                      <li>{el.text}</li>
                      <li>{el.num}</li>
                      <li>{el.email}</li>
                      <button className="delete" onClick={()=>{
                          let narr=tasks.filter((ele,id)=>{
                              return el!=ele
                          })
                          setTasks(narr);
                      }}>delete</button>
                  </div>
                  
              })
         }


      </ul>
      </div>
  );
};

export default Body;
