import './styles/App.scss'
import './styles/DarkTheme.scss'
import Header from "./components/Header";
import Output from "./components/Output";
import React, { useEffect, useReducer, useState } from 'react';

export const CountriesContext = React.createContext();

const setURI = (currState, action) => {
  const domain = 'https://restcountries.eu/rest/v2/'
  // Check if user filters by region
  const regions = ['africa', 'americas', 'asia', 'europe', 'oceania']
  if (regions.includes(action)) {
    return `${domain}region/${action}`
  // Check if input is empty then show all countries
  } else if (action === '') {
    return `${domain}all`
  // If input exists search for country by input
  } else {
    return `${domain}name/${action}`
  }
}

function App() {
  // Reducer that generates link to filter the countries by user input or region selection
  const [URI, dispatch] = useReducer(setURI, 'https://restcountries.eu/rest/v2/all')
  // State that holds filtered countries data, and is passed to Output component
  const [countries, setCountries] = useState([])

  useEffect(() => {
    // Set loader for when the data is being fetched
    setCountries('loading')
    fetch(URI)
    .then(res => res.json())
    .then(data => {
      // Set nothing found message if there is no countries found by the query
      if (data.status === 404) return setCountries('error')
      setCountries(data)
    })
    .catch(err => console.log(err))
  }, [URI])

  return (
    <div className="App">
      <Header />
      <main>
        <CountriesContext.Provider value={{countries, dispatch}}>
          <Output />
        </CountriesContext.Provider>
      </main>
    </div>
  );
}

export default App;
