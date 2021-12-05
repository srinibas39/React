import { useEffect, useState } from "react";
import { firestore } from "./firebase";

let Firestore=()=>{
    
   const [name,setName]=useState("");
   const [age,setAge]=useState(0);
   
   let create=async ()=>{
   let docRef= await firestore.collection("users").add({
        name,age
    })
   }
   //updata
   let update=async ()=>{
        let uid="NFx4MZanaBXC0cMOjyG3"
        await firestore.collection("users").doc(uid).update({
            name,age
        });
        
   }
   //delete
   let del=async()=>{
    let uid="NFx4MZanaBXC0cMOjyG3"
    await  firestore.collection("users").doc(uid).delete();
   }
   //Read
   useEffect(async ()=>{
    //   let uid="NFx4MZanaBXC0cMOjyG3"
    //   let data=await firestore.collection("users").doc(uid).get();
    //   console.log(data.data());
    // ---------------------------------------------------------------
    let docs=await firestore.collection("users").get();
     docs.forEach((docObj)=>{
         console.log(docObj.data())
     })

   })
    return <>
    <div>
        <label htmlFor="name">name</label>
        <input type="text" className="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <label htmlFor="age">age</label>
        <input type="number" className="age" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
        <button onClick={()=>{create()}}>create</button>
        <button onClick={()=>{update()}}>Update</button>
        <button onClick={()=>{del()}}>delete</button>
    </div>
    </>
}

export default Firestore;