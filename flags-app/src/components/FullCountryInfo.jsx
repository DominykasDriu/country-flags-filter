import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router'
import { BsArrowLeft } from 'react-icons/bs'
import {
  Route,
  Link,
  useParams
} from "react-router-dom";
import './FullCountryInfo.scss'

export default function FullCountryInfo() {
  // Take country 3 letters country code from the domain parameters
  let { id } = useParams()
  // Country data state
  const [info, setInfo] = useState([])

  useEffect(() => {
    // Set loader whilst data is loaded
    setInfo('loading')
    fetch(`https://restcountries.eu/rest/v2/alpha/${id}`)
    .then(res => res.json())
    .then(data => {
      setInfo(data)
      // Set document title to country name
      document.title = data.name
    })
    .catch(err => console.log(err))
  }, [id])
  
  return (
    <div className='country-info-wrapper'>
      <Route>
        {/* Send user back to main page */}
        <Link to='/'>
          <button className='back'><BsArrowLeft/>Back</button>
        </Link>
      </Route>
      {info === 'loading' ? <div className='loader'></div> :
      
      <div className="info-wrapper">
      <img src={info.flag} alt=""/>
      <div className="text-info">
        <h2>{info.name}</h2>
        <div className="lists-wrapper">
          <ul>
            <li><span>Native name:</span> {info.nativeName}</li>
            <li><span>Population:</span> {info.population}</li>
            <li><span>Region:</span> {info.region}</li>
            <li><span>Sub region:</span> {info.subregion}</li>
            <li><span>Capital:</span> {info.capital}</li>
          </ul>
          <ul>
            <li><span>Top Level Domain:</span> {info.topLevelDomain}</li>
            <li><span>Currencies:</span> {info.currencies ? info.currencies.map(e => e.name).join(', ') : ''}</li>
            <li><span>Languages:</span> {info.languages ? info.languages.map(e => e.name).join(', ') : ''}</li>
          </ul>
        </div>
        <div className="border-countries-wrapper">
          <p>Border Countries:</p>
          <Route>
            {/* If any neighbouring countries exists create buttons to easily access them */}
            {info.borders && info.borders.length > 1 ? info.borders.map(e => (
              <Link to={e}>
                <button>{e}</button>
              </Link>
            ))
            // If there are no neighbouring countries display the message
            : (<p style={{paddingLeft: '10px', fontWeight: 300}}>No countries have borders with {info.name}</p>)}
          </Route>
        </div>
      </div>
    </div>
      }
    </div>
  )
}
