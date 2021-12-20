import React, { useEffect, useState } from 'react'
import { database } from './firebase';
import CircularProgress from '@mui/material/CircularProgress';
import Video from "./Video";
import "./Post.css"
import { Avatar } from '@mui/material';
import Like from './Like';


let Post=({user})=>{

    const[allPosts,setAllPosts]=useState(null);
    
    useEffect(()=>{
        let parr=[];
        const unsub=database.posts.orderBy("createdAt","desc").onSnapshot((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                let data={...doc.data(),pid : doc.id} //spreading out the document and adding one key value pair.
                parr.push(data);
            })
            setAllPosts(parr);
            
        })
        return()=>{
            unsub();//clean up
        }
    },[])
   
    return (
        <div >
            {
                
               allPosts===null || user===null ? <CircularProgress color="secondary" /> : 
               <div className="video-container">
                   {
                       allPosts.map((post,index)=>{
                         return <React.Fragment key={index}>
                               <div className="video">
                                     <Video src={post.postUrl}/>   
                                     <div className="fa">
                                         <Avatar src={post.uProfile}/>
                                         <h4 style={{margin:"5px",fontSize:"20px"}}>{post.uName}</h4>
                                     </div>
                                     <Like user={user} post={post}/>
                               </div>
                            
                           </React.Fragment>
                       })
                   }
               </div>

            }
        </div>
    )
}

export default Post

