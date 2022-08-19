import React from 'react'
import { Link } from 'react-router-dom'
export default function CountriesList(props) {
  const { info } = props
  // console.log(info)

  return (
    <div>
      <h1>hello</h1>
      {info.map(el => {
        return (
          <ul key={el.alpha3Code}>
            <li >
              <img src={`https://flagpedia.net/data/flags/icon/72x54/${el.alpha2Code.toLowerCase()}.png`} alt='' width='50px' />
              <Link to={`${el.alpha3Code}`}>{el.name.common}</Link>
            </li>
          </ul>
        )
      })}
    </div>
  )
}
