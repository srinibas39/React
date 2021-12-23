import {useState,useEffect} from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { database } from "./firebase";

const Like2=({post,user})=>{
    const [like,setLike]=useState(null);

    useEffect(()=>{
        let check=post.likes.includes(user.userid)?true:false;
        setLike(check)
      },[post])
    
      const handleLike=()=>{
          console.log("clicked")
          if(like==true){
           let narr=post.likes.filter((el)=>{
               return el!=user.userid
           });
           database.posts.doc(post.pid).update({
               likes:narr
           })
          }
          else{
              let narr=[...post.likes,user.userid]
              database.posts.doc(post.pid).update({
                  likes:narr
              })
        
          }
    
      }
      
    return <div>
      {
          like!=null?
          <>
           {
               like==true?<FavoriteIcon onClick={handleLike} className="like"/>:<FavoriteIcon onClick={handleLike} className="notlike"/>
           }
          </>:<></>
      }
    </div>
}

export default Like2