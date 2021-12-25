
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { database } from "./firebase";
import Navbar from "./Navbar";
import Post from "./Post";
import UploadFiles from "./uploadfiles";


let Feed = () => {
    const {user,logout} = useContext(AuthContext);
    const [userData,setUserData]=useState("");

    useEffect(()=>{
        let unsub=database.users.doc(user.uid).onSnapshot((snapshot)=>{
            setUserData(snapshot.data())
        })
        return()=>{
            unsub();
        }
    },[user])

    return <>
       <Navbar user={userData}/>
        <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center", 
            flexDirection:"column",
            marginTop:"7rem"
        }}>
            {/* <div className="comp" style={{width:"50%"}}>
                <h1>Hello</h1>
                <button onClick={logout}>Log out</button>
            </div> */}
                <UploadFiles user={userData}  />
                <Post user={userData} />

        </div>
    </>
}
export default Feed;