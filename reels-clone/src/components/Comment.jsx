
import React, { useEffect, useState } from 'react'
import { database } from './firebase';
import CircularProgress from '@mui/material/CircularProgress';
import Avatar from '@mui/material/Avatar';


const Comment=({post})=>{
    const [comments,setComments]=useState(null);
    
    useEffect(async () => {
        let narr=[];
        for(let i=0;i<post.comments.length;i++){
            let data=await database.comments.doc(post.comments[i]).get()
            narr.push(data.data());
        }
        setComments(narr);
        
    }, [post])
    return (

        <div>
            {
                comments==null?<CircularProgress color="secondary" />:<>
                 
                  {
                      comments.map((comment,idx)=>{
                          
                        return <div key={idx} style={{display:'flex',alignItems:"center" ,border:"1px solid",margin:"2px"}}>
                            <Avatar  src={comment.avatar}/>
                             <div>
                                  <h4>{comment.name}</h4>
                                  <p>{comment.comment}</p>
                             </div>

                        </div>
                      })
                  }
                
                </>

            }
            
        </div>
    )
}

export default Comment
