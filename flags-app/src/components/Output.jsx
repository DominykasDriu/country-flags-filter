import React, { useContext } from 'react'
import './Output.scss'
import CountryCard from './CountryCard'
import FullCountryInfo from './FullCountryInfo';
import {CountriesContext} from '../App'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Output() {
  const countriesData = useContext(CountriesContext)
  // let {id} = useParams()
  return (
    <div className='output'>
      <Router>
        <Switch>
          <Route exact path='/'>
              {
            // Check if API returned 404  
            countriesData.countries === 'error' ? <p className='not-found'>Nothing found</p> : 
            // If API is still loading data show loading
            countriesData.countries === 'loading' ? <div className='loader'></div> :
            // If data is not empty render
            countriesData.countries.map((e, index) => (
              <Link to={`/country/${e.name.replace(/[,() ]+/g, '').toLowerCase()}`}>
                <CountryCard 
                key={index}
                flag={e.flag}
                name={e.name}
                pop={e.population}
                region={e.region}
                capital={e.capital}
                />
              </Link>
            ))
            }
          </Route>
          <Route path='/country/:id'>
            <FullCountryInfo />
          </Route>
        </Switch>
      </Router>
      
    </div>
  )
}



// import React, { useContext } from 'react'
// import './Output.scss'
// import CountryCard from './CountryCard'
// import {CountriesContext} from '../App'

// export default function Output() {
//   const countriesData = useContext(CountriesContext)

//   return (
//     <div className='output'>
//       {
//       // Check if API returned 404  
//       countriesData.countries === 'error' ? <p>Nothing found</p> : 
//       // If API is still loading data show loading
//       countriesData.countries === 'loading' ? <div className='loader'></div> :
//       // If data is not empty render
//       countriesData.countries.map((e, index) => (
//         <CountryCard 
//         key={index}
//         flag={e.flag}
//         name={e.name}
//         pop={e.population}
//         region={e.region}
//         capital={e.capital}
//         />
//       ))
//       }
//     </div>
//   )
// }
