
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { database } from "./firebase";
import Post from "./Post";
import UploadFiles from "./uploadfiles";


let Feed = () => {
    const {logout,user} = useContext(AuthContext);
    const [userData,setUserData]=useState("");


    useEffect(()=>{
        let unsub=database.users.doc(user.uid).onSnapshot((snapshot)=>{
            setUserData(snapshot.data())
        })
        return()=>{
            unsub();
        }
    })

    return <>
        <div style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                flexDirection:"column"
        }}>
            <div className="comp" style={{width:"50%"}}>
                <h1>Hello</h1>
                <button onClick={logout}>Log out</button>
            </div>
                <UploadFiles user={userData}  />
                <Post user={userData} />

        </div>
    </>
}
export default Feed;