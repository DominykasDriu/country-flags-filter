import React, { useContext } from 'react'
import './Output.scss'
import CountryCard from './CountryCard'
import {CountriesContext} from '../App'

export default function Output() {
  const countriesData = useContext(CountriesContext)
  console.log(countriesData);
  return (
    <div className='output'>
      {countriesData.countries.map((e, index) => (
        <CountryCard 
        key={index}
        flag={e.flag}
        name={e.name}
        pop={e.population}
        region={e.region}
        capital={e.capital}
        />
      ))}
    </div>
  )
}
