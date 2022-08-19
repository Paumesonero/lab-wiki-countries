import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
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
          <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt='' width='50px' />
          <p>Capital: {country.capital}</p>
          <p>Area: {country.area}</p>
          <p>Borders:</p>
          {country.borders.map(el => {
            return (
              <ul>
                <li><Link to={`/${el}`}>{el}</Link></li>
              </ul>
            )



          })}

        </div>
      )}
      {!country && <p>Country not found</p>}

    </div>
  )
}
