import React, {useState, useEffect, useRef} from "react";
import bwImage from './gradient-modified.jpg';
import coloredImage from './gradient.jpg';

const ColorConvert=()=>{
  const imageRef=useRef();

return(
<div>
  <div className="image">
    <img ref={imageRef} onMouseEnter={()=>imageRef.current.src=coloredImage} onMouseLeave={()=>imageRef.current.src=bwImage}  style={{width:800, height:400}}></img>
  </div>
</div>
)}
 export default ColorConvert;