import React, { useState, useContext } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import './Filters.scss'
import {CountriesContext} from '../App'

export default function Filters() {
  const [regionSelector, setRegionSelector] = useState(false)
  // Recieve reducer dispatch function from App component
  const countriesData = useContext(CountriesContext)
  // Handle region selection
  const searchRegion = (region) => {
    document.title = region.charAt(0).toUpperCase() + region.slice(1)
    // Change state so the chevron changes
    setRegionSelector(!regionSelector)
    // Send request to App so it displays countries by region
    countriesData.dispatch(region)
  }

  return (
    <div className='filters-wrapper'>
      <div className="input">
        <AiOutlineSearch size='24px' className='icon'/>
        {/* Upon writing send request to show filtered countries from App */}
        <input type='text' placeholder='Search for a country...' onChange={(e) => {
          countriesData.dispatch(e.target.value)
          document.title = 'Countries'
        }}/>
      </div>

      <div className="region-filter-wrapper">
        {/* Open region selection tab upon click, and change chevron */}
        <button onClick={() => setRegionSelector(!regionSelector)}>Filter by Region 
        {regionSelector ? <FiChevronUp size='20px' className='icon'/> : <FiChevronDown size='20px' className='icon'/>}
        </button>
        {/* Show/close region selection */}
        <div className={regionSelector ? 'active' : ''}>
          <ul>
            <li onClick={() => searchRegion('africa')}>Africa</li>
            <li onClick={() => searchRegion('americas')}>America</li>
            <li onClick={() => searchRegion('asia')}>Asia</li>
            <li onClick={() => searchRegion('europe')}>Europe</li>
            <li onClick={() => searchRegion('oceania')}>Oceania</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
