import React from 'react'
import './Header.scss'
import { FiMoon } from 'react-icons/fi'

export default function Header() {
  return (
    <header>
      <h1>Where in the world?</h1>
      <div className='color-mode-toggle'>
        <FiMoon size='20px'/>
        <p>Dark Mode</p>
      </div>
    </header>
  )
}
