  
import React, { useState } from 'react';
import Town from './Town';
export default function Cities(props) {
  const [click, setclick] = useState(false)
  const changeClick = () => {
    setclick(!click);
  }
  return (
    <>
      <li onClick={changeClick} id={`city${props.id}`}><button>{props.cities.name}</button></li>
      <ul>
        {click ? props.cities.towns.map((town, index) => {
          return <Town town={town} key={index + 1} id={index + 1}/>
        }):""}
      </ul>
    </>
  )
}
