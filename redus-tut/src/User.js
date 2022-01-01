import { useState } from "react";
import { useEffect } from "react"
import axios from "axios"
import { connect } from "react-redux";
import { fetchUsers } from "./redux/userAction";

const User=({user,fetchUsers})=>{
    // const [loading,setLoading]=useState(true);
    // const [users,setUsers]=useState(null);
    // const [error,setError]=useState("");

    useEffect(()=>{
        // try{
        //   let res=await axios.get("https://jsonplaceholder.typicode.com/users");
        //   let data=res.data;
        //   setUsers(data);
        //   setLoading(false);
        // }
        // catch(error){
        //     setError(error.message)
        //     setLoading(false);
        // }

        fetchUsers();
        
    },[])
    
    console.log(user)

   return <>
   {
       user.loading?<h1>loading...</h1>:user.error!=""?<h1>{user.error}</h1>:
       <ul>
            {
               user.users.length>0 && user.users.map((user)=>{
                   return <li key={user.id}>{user.name}</li>
                })
            }

       </ul>
   }
   
   </>
}

const mapStateToProps=(state)=>{
    return {
        user:state.user
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
         fetchUsers:()=>dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(User)