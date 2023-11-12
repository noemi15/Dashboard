import React  from 'react'
import { useFetch } from '../useFetch'

function Precipitacion() {
    const {weather, loading,error} = useFetch("https://api.open-meteo.com/v1/forecast?latitude=-34&longitude=-64&current=precipitation&timezone=auto&forecast_days=1") 
       
    
  return (
    <div style={{marginTop:'15px'}} >
      {error && <li> Error : {error}  </li>}
      {loading && <li> Loading...   </li>}
      <p>Precipitacion </p>
      <p className='temp'>{weather && weather.current.precipitation}  {weather && weather.current_units.precipitation} </p>  
     
     
    </div>
  )
  }
export default Precipitacion