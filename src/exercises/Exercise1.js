import React,  { useState, useEffect } from 'react';

export default function Exercise1() {
  // your code here
  const [names, setName] = useState('');
  const [cities, setCity] = useState('');
  const [_countries, setCountry] = useState('');

  useEffect(() => {
    document.title = `Modified`;
  })

  const nameHandler = (e) => {
    setName (e.target.value);
  }

  const cityHandler = (e) => {
    setCity (e.target.value);
  }

  const countriesHandler = (e) => {
    setCountry(e.target.value);
  }

  const countries = ['united states', 'china', 'united kingdom', 'australia']
  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 1</h4>
      <div className="exercise" id="ex-1">
        {/* your code here... */}
        <input type="text" placeholder="name" onChange={nameHandler}></input>
        <input type="text" placeholder="city" onChange={cityHandler}></input>
        <select name="country" id="country" onChange={countriesHandler}>
          {countries.map(country => <option value={country}>{country}</option>)}
        </select>
      </div>
    </div>
  )
}