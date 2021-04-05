import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import {BsArrowLeft} from 'react-icons/bs'
import './FullCountryInfo.scss'

export default function FullCountryInfo() {
  let { id } = useParams()

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/alpha/${id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      // if (data.status === 404) return setCountries('error')
      // setCountries(data)
    })
    .catch(err => console.log(err))
  }, [id])

  return (
    <div className='country-info-wrapper'>
      <button className='back'><BsArrowLeft/>Back</button>
      <div className="info-wrapper">
        <img src="https://restcountries.eu/data/alb.svg" alt=""/>
        <div className="text-info">
          <h2>Belgium</h2>
          <div className="lists-wrapper">
            <ul>
              <li><span>Native name:</span> Belgium</li>
              <li><span>Population:</span> 11111111</li>
              <li><span>Region:</span> Western Europe</li>
              <li><span>Sub region:</span> Western Europe</li>
              <li><span>Capital:</span> Burssels</li>
            </ul>
            <ul>
              <li><span>Top Level Domain:</span> .be</li>
              <li><span>Currencies:</span> Euro</li>
              <li><span>Languages:</span> Dutch, German</li>
            </ul>
          </div>
          <div className="border-countries-wrapper">
            <p>Border Countries:</p>
            <button>France</button>
            <button>Geramny</button>
            <button>Netherlands</button>
          </div>
        </div>
      </div>
    </div>
  )
}
