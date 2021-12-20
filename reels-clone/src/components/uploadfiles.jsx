import React,{useContext, useState} from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import FileUploadIcon from "@mui/icons-material/FileUpload";
import LinearProgress from '@mui/material/LinearProgress';
import { AuthContext } from '../context/AuthContext';
import { v4 as uuidv4 } from 'uuid';
import { database ,storage} from './firebase';

function UploadFiles(props) {

    const {user}=useContext(AuthContext)
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(false);
    

    
    
    
    const handleChange=async (file)=>{
        if(file==null){
            setError("Please upload video");
            setTimeout(()=>{setError("")},2000);
        }
        if(file.size/(1024*1024)>100){
            setError("Please upload video of size less than 100mb");
            setTimeout(()=>{setError("")},2000)
        }
        try{
            setLoading(true);
             const uid=uuidv4();
             
              let uploadTask=storage.ref(`/posts/${uid}/${file.name}`).put(file);
              uploadTask.on("state_changed",fn1,fn2,fn3);
              function fn1(snapshot){ //progress
               let progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
               console.log(progress);
              }
              function fn2(error){ //error
                 setError(error);
                 setTimeout(()=>{setError("")},2000);
                 
              }
              async function fn3(){ //success
                let URL= await uploadTask.snapshot.ref.getDownloadURL();
                let obj={
                    likes:[],
                    comments:[],
                    postId:uid,
                    postUrl:URL,
                    uName:props.user.name,
                    uProfile:props.user.profileURL,
                    uId:props.user.userid,
                    email:props.user.email,
                    createdAt:database.getTimestamp

                }
                let ref=await database.posts.add(obj);
                let res=await database.users.doc(props.user.userid).update({
                    postId:props.user.postId!=null?[...props.user.postId,ref.id]:[ref.id]
                })
                setLoading(false)
              }
              
              
        }
        catch(error){
           
             setError(error);
             setTimeout(()=>{setError("")},2000);
             setLoading(false);
             

        }
    }
    
    

  

    return (
        <div style={{marginTop:"-2.2rem", marginBottom:"4px"}}>
            {
                error!=''?<Alert severity="error">{error}</Alert>:
                <>
                    <input type="file" accept="video/*" id="upload-input" style={{display:'none'}} onChange={(e)=>{handleChange(e.target.files[0])}} />
                    <label htmlFor="upload-input">
                        <Button
                            variant="outlined"
                            color="secondary"
                            component="span"
                            disabled={loading}
                            
                        >
                        <FileUploadIcon/>&nbsp;Upload Video
                        </Button>
                    </label>
                    {loading && <LinearProgress color="secondary" style={{marginTop:'3%'}} />}
                </>
            }
        </div>
    )
}

export default UploadFiles;