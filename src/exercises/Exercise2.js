import React, { useState, useEffect } from 'react'
const axios = require('axios');

export default function Exercise2() {
  // your code here
  const [data, setData] = useState([]);

  const fetchdata = async() => {
    const f_data = await axios.get("https://randomuser.me/api/?results=5");
    const the_data = f_data.data.results;
    setData(the_data);
  }

  useEffect(() => {
    fetchdata();
  }, []);


  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 2</h4>
      <div className="exercise" id="ex-2">
        {
          data.map(f =>
          <div>
            <span>{f.name.first}</span>
            <span>{f.name.last}</span>
            <img src={f.picture.thumbnail} alt="img"/>
          </div>
        )}
      </div>
    </div>
  )
}