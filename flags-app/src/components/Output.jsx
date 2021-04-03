import React, { useContext } from 'react'
import './Output.scss'
import CountryCard from './CountryCard'
import {CountriesContext} from '../App'

export default function Output() {
  const countriesData = useContext(CountriesContext)
  console.log(countriesData);
  return (
    <div className='output'>
      
      {
      // Check if API returned 404  
      countriesData.countries === 'error' ? <p>Nothing found</p> : 
      // If API is still loading data show loading
      countriesData.countries === 'loading' ? <div className='loader'></div> :
      // If data is not empty render
      countriesData.countries.map((e, index) => (
        <CountryCard 
        key={index}
        flag={e.flag}
        name={e.name}
        pop={e.population}
        region={e.region}
        capital={e.capital}
        />
      ))
      }
    </div>
  )
}
