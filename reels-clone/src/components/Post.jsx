import React, { useEffect, useState } from "react";
import { database } from "./firebase";
import CircularProgress from "@mui/material/CircularProgress";
import Video from "./Video";
import "./Post.css";
import { Avatar } from "@mui/material";
import Like from "./Like";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Video2 from "./Video2";
import Like2 from "./Like2";
import AddComment from "./AddComment";
import Comment from "./Comment";


let Post = ({ user }) => {
  const [allPosts, setAllPosts] = useState(null);
  

  useEffect(() => {
    let parr = [];
    const unsub = database.posts
      .orderBy("createdAt", "desc")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let data = { ...doc.data(), pid: doc.id }; //spreading out the document and adding one key value pair.
          parr.push(data);
        });
        setAllPosts(parr);
      });
    return () => {
      unsub(); //clean up
    };
  }, []);
  const [open, setOpen] = useState(null);

  const handleClickOpen = (id) => {
    setOpen(id);
  };

  const handleClose = () => {
    setOpen(null);
  };
  
  const callback=(enteries)=>{
    enteries.forEach((entry)=>{
        let ele=entry.target.childNodes[0];
        ele.play().then(()=>{
            if(!ele.paused && !entry.isIntersecting){
                ele.pause();
            }
        })
    })
}
let observer=new IntersectionObserver(callback,{
    threshold:0.6
})
useEffect(()=>{
    const elements=document.querySelectorAll(".video");
    elements.forEach((el)=>{
        observer.observe(el)
    })
 return()=>{
    observer.disconnect();
 }
},[allPosts])

  return (
    <div>
      {allPosts === null || user === null ? (
        <CircularProgress color="secondary" />
      ) : (
        <div className="video-container">
          {allPosts.map((post, index) => {
            return (
              <React.Fragment key={index}>
                <div className="video">
                  <Video src={post.postUrl} />
                  <div className="fa">
                    <Avatar src={post.uProfile} />
                    <h4 style={{ margin: "5px", fontSize: "20px" }}>
                      {post.uName}
                    </h4>
                  </div>
                  <Like user={user} post={post} />
                  <ChatBubbleIcon
                    style={{
                      position: "relative",
                      bottom: "27px",
                      left: "3rem",
                      color: "white",
                    }}
                    onClick={()=>handleClickOpen(post.postId)}
                  />
                  <Dialog open={open==post.postId} onClose={handleClose} fullWidth={true} maxWidth="md">
                   
                      <div className="modal-container" style={{display:"flex"}}>
                        <div className="video-modal">
                           <Video2 src={post.postUrl}/>
                        </div>
                        <div className="comment-modal">
                          <Card className="card1" >
                            <Comment post={post}/>
                            
                          </Card>
                          <Card className="card2" >
                             <Typography style={{margin:"3px"}}>
                               {
                                 post.likes.length==0?"":`Liked by ${post.likes.length} users`
                               }
                             </Typography>
                             <div className="comment-box" style={{display:"flex" , justifyContent:"space-evenly", alignItems:"center"}}>
                                <Like2 post={post} user={user}/>
                                <AddComment user={user} post={post}/>
                             </div>
                          </Card>
                        </div>
                      </div>
                     
                    
                  </Dialog>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Post;
