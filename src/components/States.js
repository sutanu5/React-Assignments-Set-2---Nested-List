
import React,{useState} from 'react';
import Cities from './Cities';
export default function States(props) {
  const [click, setclick] = useState(false);
  const { name, cities } = props.states;
  const changeClick = () => {
    setclick(!click);
    console.log(click);
  }
  return (
    <>
      <li onClick={changeClick} id={`state${props.id}`}><button>{name}</button></li>
      <ul>
        {click ? cities.map((city, index) => {
          console.log("city",city);
          return <Cities cities={city} key={index + 1} id={index + 1}/>
        }):""}
      </ul>
    </>
  );
}
