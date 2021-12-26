import React from 'react'
import  ReactDOM  from 'react-dom';

function Video3({src}) {

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
        <video className="video-style" onEnded={(e)=>{handleScroll(e)}}  src={src} style={{width:"12rem", height:"20rem"}} muted="muted" onClick={(e)=>{handleClick(e)}} >
          
     </video>
    )
}

export default Video3
