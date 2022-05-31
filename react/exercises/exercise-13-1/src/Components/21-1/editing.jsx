import React, { useState, useEffect, useRef } from "react";

const Editing = () => {
  const [toggle, setToggle] = useState(true);
  // const [btnText, setBtnText] = useState("edit");
  const inputFocus = useRef();


  const toggeling=()=>{
    setToggle((prev)=>!prev)
  }

  useEffect(()=>{
    if(!toggle){
      console.log(toggle);
      inputFocus.current.focus();
    }
  })

  return (
    <div>
      {!toggle && <input ref={inputFocus}/>}
      <button onClick={toggeling}>{toggle ? "edit":"save"}</button>
    </div>
  );
};
export default Editing;
