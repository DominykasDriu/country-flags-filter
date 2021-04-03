import React, { useState, useContext } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import './Filters.scss'
import {CountriesContext} from '../App'

export default function Filters() {
  const [regionSelector, setRegionSelector] = useState(false)

  const countriesData = useContext(CountriesContext)

  const searchRegion = (region) => {
    setRegionSelector(!regionSelector)
    countriesData.dispatch(region)
  }

  return (
    <div className='filters-wrapper'>
      <div className="input">
        <AiOutlineSearch size='24px' className='icon'/>
        <input type='text' placeholder='Search for a country...' onChange={(e) => countriesData.dispatch(e.target.value)}/>
      </div>

      <div className="region-filter-wrapper">
        <button onClick={() => setRegionSelector(!regionSelector)}>Filter by Region 
        {regionSelector ? <FiChevronUp size='20px' className='icon'/> : <FiChevronDown size='20px' className='icon'/>}
        </button>
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
