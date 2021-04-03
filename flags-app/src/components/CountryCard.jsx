import React from 'react'

export default function CountryCard() {
  return (
    <div className='country-card'>
      <img src="https://restcountries.eu/data/afg.svg" alt="germany"/>
      <h3>Germany</h3>
      <ul>
        <li>Population: 8888888</li>
        <li>Region: Europe</li>
        <li>Capital: Berlin</li>
      </ul>
    </div>
  )
}
