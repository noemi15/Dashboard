import React  from 'react'
import { useFetch } from '../useFetch'

function Visibilidad() {
    const {weather, loading,error} = useFetch("https://api.open-meteo.com/v1/forecast?latitude=-34&longitude=-64&hourly=visibility&timezone=auto&forecast_days=1") 
       
    
  return (
    <div style={{marginTop:'15px'}}>
      {error && <li> Error : {error}  </li>}
      {loading && <li> Loading...   </li>}
      <p> Visibilidad</p>
      <p className='temp'>{weather && weather.hourly.visibility[0]*0.001}  km </p>  
     
     
    </div>
  )
  }
export default Visibilidad