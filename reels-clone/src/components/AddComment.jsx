import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { database } from './firebase';



const AddComment=({user,post})=>{
    const [text,setText]=useState("");

    const handleClick=async ()=>{
        let obj={
            avatar:user.profileURL,
            name:user.name,
            comment:text,
        }
        let doc=await database.comments.add(obj);
        database.posts.doc(post.pid).update({
            comments:[...post.comments,doc.id]
        })
       

    }
    return <>
     <TextField id="filled-basic" label="comment" variant="outlined" size="small" value={text} onChange={(e)=>{setText(e.target.value)}} />
     <Button variant="contained"onClick={()=>handleClick()}>post</Button>

    </>
}

export default AddComment;