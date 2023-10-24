import React  from 'react'
import { useFetch } from '../useFetch'

function TempMin() {
    const {weather, loading,error} = useFetch("https://api.open-meteo.com/v1/dwd-icon?latitude=-34&longitude=-64&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,windspeed_10m_max&timezone=auto&forecast_days=1") 
       
    
  return (
    <div >
      {error && <li> Error : {error}  </li>}
      {loading && <li> Loading...   </li>}

      <p className='extremos'>Min {weather && weather.daily.temperature_2m_min}  {weather && weather.daily_units.temperature_2m_max} </p>  
     
     
    </div>
  )
  }
export default TempMin