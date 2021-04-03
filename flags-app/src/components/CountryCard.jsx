import React from 'react'
import './CountryCard.scss'

export default function CountryCard() {
  return (
    <div className='country-card'>
      <img src="https://restcountries.eu/data/afg.svg" alt="germany"/>
      <div className="info">
        <h3>Germany</h3>
        <ul>
          <li><span>Population:</span> 8888888</li>
          <li><span>Region:</span> Europe</li>
          <li><span>Capital:</span> Berlin</li>
        </ul>
      </div>
    </div>
  )
}
