import React from 'react'
import "./Video.css"
import  ReactDOM  from 'react-dom';

function Video({src}) {

   const handleClick=(e)=>{
       e.preventDefault();
       e.target.muted=!e.target.muted;
   } 
   const handleScroll=(e)=>{
       const next=ReactDOM.findDOMNode(e.target).parentNode.nextSibling;
       if(next){
           next.scrollIntoView();
           e.target.muted="true";
       }
   }
    return (
        <video className="video-style" onEnded={(e)=>{handleScroll(e)}}  src={src} style={{width:"30vw", height:"80vh"}} muted="muted" onClick={(e)=>{handleClick(e)}} >
          
     </video>
    )
}

export default Video
