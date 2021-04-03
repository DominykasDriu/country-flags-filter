import './styles/App.scss'
import Filters from "./components/Filters";
import Header from "./components/Header";
import Output from "./components/Output";
import React, { useEffect, useState } from 'react';


export const CountriesContext = React.createContext();

function App() {
  

  const [countries, setCountries] = useState([])

  URL = 'https://restcountries.eu/rest/v2/all'

  useEffect(() => {
    fetch(URL)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setCountries(data)
    })
  }, [])

  return (
    <div className="App">
      <Header />
      <main>
        <CountriesContext.Provider value={countries}>
          <Filters />
          <Output />
        </CountriesContext.Provider>
      </main>
    </div>
  );
}

export default App;
