import React, {useState, useEffect, useRef} from "react";
import Video from './video.mp4';

const VideoPlayer=()=>{
  const videoRef=useRef();

  const handlePlay=()=>{
    videoRef.current.play();
  }

  const handlePause=()=>{
    videoRef.current.pause();
  }

  return(
    <div>
      <video ref={videoRef}>
        <source src={Video} type="video/mp4"/>
      </video>
      <div className="btns">
        <span><button onClick={handlePlay}>Play</button></span>
        <span><button onClick={handlePause}>pause</button></span>
      </div>
    </div>
  )
}

export default VideoPlayer;