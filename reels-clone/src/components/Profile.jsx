import { useState , useEffect } from "react";
import React from "react";
import { useParams } from "react-router";
import { database } from "./firebase";
import CircularProgress from '@mui/material/CircularProgress';
import Navbar from "./Navbar";
import "./Profile.css"
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
import Video3 from "./Video3";


const Profile=()=>{
   const {id}=useParams();
   const [userData,setUserData]=useState(null);
   const [postData,setPostData]=useState(null);
   useEffect(()=>{
       
       database.users.doc(id).onSnapshot((snapshot)=>{
             setUserData(snapshot.data())
       })

   },[id])

   useEffect(async ()=>{
       if(userData!=null){

           let parr=[]
          for(let i=0;i<userData.postId.length;i++){
              let post=await database.posts.doc(userData.postId[i]).get();
              parr.push({...post.data(),pid:post.id});
          }
          setPostData(parr);
       }

   },[userData])
   const [open, setOpen] = useState(null);

   const handleClickOpen = (id) => {
     setOpen(id);
   };
 
   const handleClose = () => {
     setOpen(null);
   };
    return <>
        
        {
            postData==null || userData==null ?<CircularProgress color="secondary" />:

             <>
             <Navbar user={userData}/>
              <div className="spacer"></div>
              <div className="container">
                <div className="upper-part">
                  <div className="profile-img">
                      <img src={userData.profileURL} />
                  </div>
                  <div className="info">
                      <Typography variant="h5">
                          Email:{userData.email}
                      </Typography>
                      <Typography variant="h6">
                          Posts:{userData.postId.length}
                      </Typography>
                  </div>
                </div> 
                <hr style={{marginTop:"2rem",marginBottom:"2rem"}} />
                <div className="profile-video">
                    {postData.map((post, index) => {
                        return (
                        <React.Fragment key={index}>
                            <div className="p-video"  onClick={()=>handleClickOpen(post.pid)}>
                                <Video3 src={post.postUrl} />
                           
                           
                            <Dialog open={open==post.pid} onClose={handleClose} fullWidth={true} maxWidth="md">
                            
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
                                            <Like2 post={post} user={userData}/>
                                            <AddComment user={userData} post={post}/>
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
              </div>
             </>


        }

    </>
}

export default Profile;