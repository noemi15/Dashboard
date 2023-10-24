import React  from 'react'
import { useFetch } from '../useFetch'

function VelocidadViento() {
    const {weather, loading,error} = useFetch("https://api.open-meteo.com/v1/dwd-icon?latitude=-34&longitude=-64&daily=windspeed_10m_max&timezone=auto&forecast_days=1") 
       
    
  return (
    <div >
      {error && <li> Error : {error}  </li>}
      {loading && <li> Loading...   </li>}

      <p className='temp'>
      <img src='./icons/wind.svg' alt="viento" className="rounded float-start pequeño"/>
      <p>Velocidad del viento</p>
      {weather && weather.daily.windspeed_10m_max}  {weather && weather.daily_units.windspeed_10m_max} </p>  
      
     
    </div>
  )
  }
export default VelocidadViento