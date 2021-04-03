import React from 'react'
import './CountryCard.scss'

export default function CountryCard({flag, name, pop, region, capital}) {
  return (
    <div className='country-card'>
      <img src={flag} alt="germany"/>
      <div className="info">
        <h3>{name}</h3>
        <ul>
          <li><span>Population:</span> {pop}</li>
          <li><span>Region:</span> {region}</li>
          <li><span>Capital:</span> {capital}</li>
        </ul>
      </div>
    </div>
  )
}
