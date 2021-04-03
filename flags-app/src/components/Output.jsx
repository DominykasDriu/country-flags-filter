import React, { useContext } from 'react'
import './Output.scss'
import CountryCard from './CountryCard'
import {CountriesContext} from '../App'

export default function Output() {
  const countries = useContext(CountriesContext)

  return (
    <div className='output'>
      {countries.map((e, index) => (
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
