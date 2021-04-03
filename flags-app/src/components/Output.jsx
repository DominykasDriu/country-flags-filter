import React from 'react'
import './Output.scss'
import CountryCard from './CountryCard'

export default function Output() {
  return (
    <div className='output'>
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
    </div>
  )
}
