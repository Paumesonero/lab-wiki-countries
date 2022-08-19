import React, { useState } from 'react'
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
            <li ><Link to={`${el.alpha3Code}`}>{el.name.common}</Link></li>
          </ul>
        )
      })}
    </div>
  )
}
