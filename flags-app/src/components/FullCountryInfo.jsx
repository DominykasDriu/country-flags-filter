import React, { useEffect } from 'react'
import { useParams } from 'react-router'

export default function FullCountryInfo() {
  let { id } = useParams()

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      // if (data.status === 404) return setCountries('error')
      // setCountries(data)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <p>{id}</p>
    </div>
  )
}
