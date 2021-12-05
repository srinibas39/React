
import { useState } from 'react';
import './App.css';
import context from './context';
import Navbar from './navbar';
import Parent1 from './parent1';
import Parent2 from './parent2';


let App=()=>{
  const [theme,setTheme]=useState(false);
  return <context.Provider value={theme}>
     <button onClick={()=>{
         setTheme(!theme);
     }}>click</button>
     <Navbar/>
     <Parent1/>
     <Parent2/>


  </context.Provider>
}
export default App;