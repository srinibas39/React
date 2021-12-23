let Video2=({src})=>{
    return (
        <video src={src} controls muted="muted" autoPlay style={{
            height:"80vh",
            width:"33vw",
            display:"block",
            objectFit:"fill"
        }}></video>
    )
}

export default Video2;