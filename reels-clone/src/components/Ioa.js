import React, { useEffect } from 'react'
import vid1 from "../videos/vid1.mp4"
import vid2 from "../videos/vid2.mp4"
import vid3 from "../videos/vid3.mp4"


function Ioa() {
   

  
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

    })
   
    return (
        <div className="video-container">
            <div className="video">
                <video src={vid1} muted="muted" style={{height:"85vh"}}></video>
            </div>
            <div className="video">
                <video src={vid2} muted="muted" style={{height:"85vh"}}></video>
            </div>
            <div className="video">
                <video src={vid3} muted="muted" style={{height:"85vh"}}></video>
            </div>
        </div>
    )
}

export default Ioa
