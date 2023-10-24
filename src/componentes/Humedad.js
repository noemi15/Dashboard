import React  from 'react'
import { useFetch } from '../useFetch'


function Humedad() {
    const {weather, loading,error} = useFetch("https://api.open-meteo.com/v1/forecast?latitude=-34&longitude=-64&current=relativehumidity_2m&timezone=auto&forecast_days=1") 
       
    
  return (
    <div >
      {error && <li> Error : {error}  </li>}
      {loading && <li> Loading...   </li>}

      <p className='temp'>
        <img src='./icons/humidity.svg' alt="humedad" className="rounded float-start pequeño"/>
        <p>Humedad</p>
        {weather && weather.current.relativehumidity_2m}  {weather && weather.current_units.relativehumidity_2m} </p>  
     
     
     
    </div>
  )
  }
export default Humedad