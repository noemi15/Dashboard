import React  from 'react'
import { useFetch } from '../useFetch'

function SensacionTermica() {
    const {weather, loading,error} = useFetch("https://api.open-meteo.com/v1/forecast?latitude=-34&longitude=-64&current=apparent_temperature&timezone=auto&forecast_days=1") 
       
    
  return (
    <div >
      {error && <li> Error : {error}  </li>}
      {loading && <li> Loading...   </li>}

      <p className='temp'>{weather && weather.current.apparent_temperature.toFixed(0)}  {weather && weather.current_units.apparent_temperature} </p>  
     
     
    </div>
  )
  }
export default SensacionTermica