import React, {useEffect, useState} from 'react';
import { API } from './API';
const SimpleFetch=()=>{
  const [results, setResults]=useState({});
  
  useEffect(()=>{
    const rand=Math.ceil(Math.random()*6 +1);
    const search=async()=>{
      const {data}=await API.get(`${rand}`);
      try{
        setResults({
          title:data.title,
          director:data.director,
        })
      }
      catch(err){
        console.log(err);
      }
    }
    search();
  },[]);

  const renderItems=()=>{
    return(
      <div>
        <div>{results.title}</div>
        <div>{results.director}</div>
      </div>
    )
  }
  return(
    <div>
      {renderItems()}
    </div>
  )

}
export default SimpleFetch;
