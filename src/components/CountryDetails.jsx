import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import axios from 'axios'
export default function CountryDetails() {
  const { countryCode } = useParams()
  const [country, setCountry] = useState(null)
  //console.log(countryCode)
  // console.log(info)

  useEffect(() => {
    const data = async () => {
      try {
        const dataFromApi = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryCode}`)
        console.log(dataFromApi)
        setCountry(dataFromApi.data)
      } catch (error) {
        console.log(error)
      }
    }
    data();
  }, [countryCode]);

  return (
    <div>
      {country && (
        <div>
          <p>Capital: {country.capital}</p>
        </div>
      )}
      {!country && <p>Country not found</p>}
      <Outlet />
    </div>
  )
}
