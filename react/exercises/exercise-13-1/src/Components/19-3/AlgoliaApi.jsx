import react, {useEffect, useState} from 'react';
import axios from 'axios';

const AlgoliaApi=()=>{
  const [term, setTerm]=useState('');
  const [searched, setSearched]=useState('hooks');
  const [list, setList]=useState([]);
  const [isSpining, setIsSpining]=useState(true);
  const [isError, setIsError]=useState(false);


  useEffect(()=>{
    const getData=async ()=>{
      try{
        isSpining&&setIsSpining(true);
        isError&&setIsError(false);
        const {data}=await axios.get(`https://hn.algolia.com/api/v1/search?query=${searched}`);
        setList(data.hits);
      }      
      catch(err){
        isError(true);
        console.log(err);
      }
      setIsSpining(false);
  }
  if(searched){
    getData();
  }
  }, [searched]);

  const insertList=()=>{
    if(!isError){
      return list.map((item)=>{
        return <li key={item.objectID}><a href={item.url}>{item.title}</a></li>
      })
    };
    return (
      <div><h1>Error: Page Not Found</h1></div>
    )
  }
  return(
    <div>
      <div className='field'>
      <input value={term} onChange={e=>setTerm(e.target.value)}/>
      <button onClick={()=>setSearched(term)}>Search</button>
      {isSpining ? <div>Loading..</div>:insertList()}
      </div>
    </div>
  )
}
export default AlgoliaApi;