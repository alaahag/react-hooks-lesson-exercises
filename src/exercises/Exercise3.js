import React, { useState, useEffect } from 'react'
import { fetchExpenses } from '../data/utils'
const axios = require('axios');

export default function Exercise3() {
  // your code here
  const [data, setData] = useState([]);
  
  const fetchData = async(m) => {
    const fData = await fetchExpenses(m.target.value);
    setData(fData);
  }

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 3</h4>
      <div className="exercise" id="ex-3">
        <select name="months" id="months" onChange={fetchData}>
          {months.map(month => <option value={months.indexOf(month)}>{month}</option>)}
        </select>
        {data.map(data =>
          <div>
            <span>amount: {data.amount}</span> <span>date: {data.date}</span> <item>item: {data.item}</item>
          </div>
        )
        }
      </div>
    </div>
  )
}