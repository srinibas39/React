import {useState} from "react";
import {storage} from "./firebase"
let Fstorage=()=>{
 const [file,setFile]=useState("")
 let upload= ()=>{
     const uploadTask= storage.ref(`/data/${file.name}`).put(file);
     uploadTask.on("state_changed",fn1,fn2,fn3);

     function fn1(snapshot){
       let progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
       console.log(`upload progress is ${progress}`);
     }
     function fn2(error){
         console.log(`error ${error}`)
     }
     async function fn3(){
      let URL= await  uploadTask.snapshot.ref.getDownloadURL();
      console.log(URL);
     }
 }
 return <>
 <label htmlFor="file">File</label>
 <input type="file" accept="image/*" onChange={(e)=>{setFile(e.target.files[0])}}/>
  <button onClick={()=>{upload()}}>upload</button> 
 
 </>

}

export default Fstorage;