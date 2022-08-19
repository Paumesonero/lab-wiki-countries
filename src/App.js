import './App.css';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import CountriesData from './countries.json';
import { useEffect, useState } from 'react';
function App() {
  const [countries, setCountries] = useState(CountriesData)
  const [country, setCountry] = useState([])
  console.log(country)

  useEffect(() => {
    const data = async () => {
      try {
        const dataFromApi = await axios.get('https://ih-countries-api.herokuapp.com/countries')
        //console.log(dataFromApi.data)
        setCountry(dataFromApi.data)
      } catch (error) {
        console.log(error)
      }
    }
    data();
  }, [])

  return (
    <div className="App">
      <Navbar />
      <div>
        <div className='main-container'>
          <CountriesList info={country} />
          <Routes>
            <Route path='/:countryCode' element={<CountryDetails />} />
          </Routes>
        </div>
      </div>




    </div>
  );
}

export default App;
