import React from 'react'

export default function Filters() {
  return (
    <div className='filters-wrapper'>
      <input type='text'/>
      <select>
        <option style={{display: 'none'}}disabled selected>Filter by Region</option>
        <option value='africa'>Africa</option>
        <option value='america'>America</option>
        <option value='asia'>Asia</option>
        <option value='europe'>Europe</option>
        <option value='oceania'>Oceania</option>
      </select>
    </div>
  )
}
