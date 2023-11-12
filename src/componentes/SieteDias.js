import React   from 'react'
import { useFetch } from '../useFetch'
import { format, parseISO } from 'date-fns';
import Icons from './Icons';


function SieteDias() {
    
    const {weather, loading,error} = useFetch("https://api.open-meteo.com/v1/forecast?latitude=-34&longitude=-64&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto") 
    
    
  return (
    <div  >
      {error && <li> Error : {error}  </li>}
      {loading && <li> Loading...   </li>}

      <table className="table">
  <thead>
    <tr>
      <th scope="col"> 
      {/* {weather && weather.daily && weather.daily.time &&  weather.daily.time[0]  &&
        format(parseISO(weather.daily.time[0]), 'dd MMM')} */}
        Hoy 
      </th>
      <th scope="col">
      {weather && weather.daily && weather.daily.time &&  weather.daily.time[1]  &&
        format(parseISO(weather.daily.time[1]), 'dd MMM')}
      </th>
      <th scope="col">
      {weather && weather.daily && weather.daily.time &&  weather.daily.time[2]  &&
        format(parseISO(weather.daily.time[2]), 'dd MMM')}
      </th>
      <th scope="col">
      {weather && weather.daily && weather.daily.time &&  weather.daily.time[3]  &&
        format(parseISO(weather.daily.time[3]), 'dd MMM')}
      </th>
      <th scope="col">
      {weather && weather.daily && weather.daily.time &&  weather.daily.time[4]  &&
        format(parseISO(weather.daily.time[4]), 'dd MMM')}
      </th>
      <th scope="col">
      {weather && weather.daily && weather.daily.time &&  weather.daily.time[5]  &&
        format(parseISO(weather.daily.time[5]), 'dd MMM')}
      </th>
      <th scope="col">
      {weather && weather.daily && weather.daily.time &&  weather.daily.time[6]  &&
        format(parseISO(weather.daily.time[6]), 'dd MMM')}
      </th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td > 
        <img src={Icons(weather && weather.daily.weather_code[0])} alt="iconos" className="rounded float-none sieteDias" /> 
        {weather && weather.daily && weather.daily.temperature_2m_max && (
        <p>
          {weather.daily.temperature_2m_max[0].toFixed(0)} {weather && weather.daily_units.temperature_2m_min}
        </p>)}
        {weather && weather.daily && weather.daily.temperature_2m_min && (
        <p>
          {weather.daily.temperature_2m_min[0].toFixed(0)} {weather && weather.daily_units.temperature_2m_min}
        </p>)}
      </td>
      
      <td> 
          <img src={Icons(weather && weather.daily.weather_code[1])} alt="iconos" className="rounded float-none sieteDias" /> 
          {weather && weather.daily && weather.daily.temperature_2m_max && (
          <p>
            {weather.daily.temperature_2m_max[1].toFixed(0)} {weather && weather.daily_units.temperature_2m_min}
          </p>)}
          {weather && weather.daily && weather.daily.temperature_2m_min && (
          <p>
            {weather.daily.temperature_2m_min[1].toFixed(0)} {weather && weather.daily_units.temperature_2m_min}
          </p>)}
      </td>

      <td> 
          <img src={Icons(weather && weather.daily.weather_code[2])} alt="iconos" className="rounded float-none sieteDias" /> 
          {weather && weather.daily && weather.daily.temperature_2m_max && (
          <p>
           {weather.daily.temperature_2m_max[2].toFixed(0)} {weather && weather.daily_units.temperature_2m_min}
          </p>)}
          {weather && weather.daily && weather.daily.temperature_2m_min && (
          <p>
           {weather.daily.temperature_2m_min[2].toFixed(0)} {weather && weather.daily_units.temperature_2m_min}
          </p>)}
      </td>

      <td> 
          <img src={Icons(weather && weather.daily.weather_code[3])} alt="iconos" className="rounded float-none sieteDias" /> 
          {weather && weather.daily && weather.daily.temperature_2m_max && (
          <p>
           {weather.daily.temperature_2m_max[3].toFixed(0)} {weather && weather.daily_units.temperature_2m_min}
          </p>)}
          {weather && weather.daily && weather.daily.temperature_2m_min && (
          <p>
           {weather.daily.temperature_2m_min[3].toFixed(0)} {weather && weather.daily_units.temperature_2m_min}
          </p>)}
      </td>

      <td> 
          <img src={Icons(weather && weather.daily.weather_code[4])} alt="iconos" className="rounded float-none sieteDias" /> 
          {weather && weather.daily && weather.daily.temperature_2m_max && (
          <p>
           {weather.daily.temperature_2m_max[4].toFixed(0)} {weather && weather.daily_units.temperature_2m_min}
          </p>)}
          {weather && weather.daily && weather.daily.temperature_2m_min && (
          <p>
           {weather.daily.temperature_2m_min[4].toFixed(0)} {weather && weather.daily_units.temperature_2m_min}
          </p>)}

      </td>

      <td> 
          <img src={Icons(weather && weather.daily.weather_code[5])} alt="iconos" className="rounded float-none sieteDias" /> 
          {weather && weather.daily && weather.daily.temperature_2m_max && (
          <p>
            {weather.daily.temperature_2m_max[5].toFixed(0)} {weather && weather.daily_units.temperature_2m_min}
          </p>)}
          {weather && weather.daily && weather.daily.temperature_2m_min && (
          <p>
            {weather.daily.temperature_2m_min[5].toFixed(0)} {weather && weather.daily_units.temperature_2m_min}
          </p>)}
      </td>

      <td> 
          <img src={Icons(weather && weather.daily.weather_code[6])} alt="iconos" className="rounded float-none sieteDias" /> 
          {weather && weather.daily && weather.daily.temperature_2m_max && (
          <p>
           {weather.daily.temperature_2m_max[6].toFixed(0)} {weather && weather.daily_units.temperature_2m_min}
          </p>)}
          {weather && weather.daily && weather.daily.temperature_2m_min && (
          <p>
           {weather.daily.temperature_2m_min[6].toFixed(0)} {weather && weather.daily_units.temperature_2m_min}
          </p>)}

      </td>
      
    </tr>
  

  </tbody>
</table>
     
    </div>
  )
  }
export default SieteDias