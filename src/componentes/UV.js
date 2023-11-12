import React  from 'react'
import { useFetch } from '../useFetch'

function UV() {
    const {weather, loading,error} = useFetch("https://api.open-meteo.com/v1/forecast?latitude=-34&longitude=-64&daily=uv_index_max&timezone=auto&forecast_days=1") 
       
    
  return (
    <div style={{marginTop:'15px'}}>
      {error && <li> Error : {error}  </li>}
      {loading && <li> Loading...   </li>}

      <p className='temp'>
      <img src='./icons/uv-index.svg' alt="humedad" className="rounded float-start pequeño"/>
      <p>Rayos UV</p>
      {weather && weather.daily.uv_index_max}  </p>  
      
     
     
    </div>
  )
  }
export default UV