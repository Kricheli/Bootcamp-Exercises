import React, { useState } from "react";

const array=["one", "two", "three", "four", "five"];

const mappedArr=array.map((item)=>{
  return {name:item, isChecked:false}
})

export const list=()=>{
  const [arr, useArrData]=useState(mappedArr);

  const renderItems=()=>{
    mappedArr.map((item)=>{
      return(
        <li onChange={handleDelete} key={item.name}><input id={item.name} checked={item.isChecked} type="checkbox"/>{item.name}</li>
        
      )
    })
  }
}