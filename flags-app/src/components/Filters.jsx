import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import './Filters.scss'

export default function Filters() {
  return (
    <div className='filters-wrapper'>
      <div className="input">
        <AiOutlineSearch size='24px' className='icon'/>
        <input type='text' placeholder='Search for a country...'/>
      </div>


      <div className="region-filter-wrapper">
        <button>Filter by Region <FiChevronDown size='20px' className='icon'/></button>
        <div className="options">
          <ul>
            <li>Africa</li>
            <li>America</li>
            <li>Asia</li>
            <li>Europe</li>
            <li>Oceania</li>
          </ul>
        </div>
      </div>
      {/* <select>
        <option style={{display: 'none'}} disabled selected>Filter by Region</option>
        <option value='africa'>Africa</option>
        <option value='america'>America</option>
        <option value='asia'>Asia</option>
        <option value='europe'>Europe</option>
        <option value='oceania'>Oceania</option>
      </select> */}
    </div>
  )
}
