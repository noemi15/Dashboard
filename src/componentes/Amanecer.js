import React  from 'react'
import { useFetch } from '../useFetch'

function Amanecer() {
    const {weather, loading,error} = useFetch("https://api.open-meteo.com/v1/dwd-icon?latitude=-34&longitude=-64&daily=weathercode,sunrise,sunset&timezone=auto&forecast_days=1") 
     
    
  return (
    <div >
     {error && <li> Error : {error}  </li>}
      {loading && <li> Loading...   </li>}

    <p>Amanecer & Atardecer</p>
    
      <p className='amanecer'> 
      <img src='./icons/sunrise.svg' alt="humedad" className="rounded float-start pequeñin"/>
       {weather &&   weather.daily.sunrise[0].slice(-5)} </p> 
      
    <p className='amanecer'>
    <img src='./icons/sunset.svg' alt="humedad" className="rounded float-start pequeñin"/>
    {weather &&   weather.daily.sunset[0].slice(-5)} </p> 
      
     
    </div>
  )
}

export default Amanecer