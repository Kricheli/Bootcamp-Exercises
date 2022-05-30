import axios from "axios";
import React, { useEffect, useState } from "react";
// import {API} from './API';

const CountriesOfTheWorld = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults]=useState([]);
  
  console.log(results);
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://restcountries.com/v3.1/all");
      for (let i = 1; i <= 250; i++) {
        setResults(data);
        setFilteredResults(data);
      }
    };
    search();
  }, []);

  useEffect(()=>{
    const filtered=results.filter((item)=>
    item.name.common.toLowerCase().includes(term))
    setFilteredResults(filtered)
  },[term])

  const rendedResults = filteredResults.map((result) => {
    return <div key={result.cca2}>{result.name.common}</div>;
  });
  return (
    <div>
      <div className="input">
        <input value={term} onChange={e=>setTerm(e.target.value)}/>
        <div>{rendedResults}</div>
      </div>
    </div>
  );
};
export default CountriesOfTheWorld;
