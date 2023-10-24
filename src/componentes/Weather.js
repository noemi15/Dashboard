//import { useState } from 'react'
import { useFetch } from '../useFetch'
import Icons from './Icons'
import SensacionTermica from './SensacionTermica'

function Weather() {
  const { weather, loading, error } = useFetch("https://api.open-meteo.com/v1/forecast?latitude=-34&longitude=-64&current=temperature_2m,apparent_temperature,is_day,weathercode,windspeed_10m&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,precipitation,weathercode&daily=weathercode&timezone=auto")
  //const [icon, setIcon] = useState("")

  const today = new Date()
  const f = new Intl.DateTimeFormat("es-ar", { dateStyle: "full" })


  let mensaje
  switch (weather && weather.current.weathercode) {
    case 0:
      mensaje = "Cielo limpio";
      break;
    case 1:
      mensaje = "Principalmente despejado"
      break;
    case 2:
      mensaje = "Parcialmente nublado"
      break;
    case 3:
      mensaje = "Nublado"
      break;
    case 45:
      mensaje = "Niebla"
      break;
    case 48:
      mensaje = "Niebla de escarcha"
      break;
    case 51:
      mensaje = "Llovizna Intensidad ligera"
      break;
    case 53:
      mensaje = "Llovizna moderada"
      break;
    case 55:
      mensaje = "Llovizna densa"
      break;
    case 56:
      mensaje = "Llovizna helada intensidad ligera"
      break;
    case 57:
      mensaje = "Llovizna helada densa"
      break;
    case 61:
      mensaje = "Lluvia Intensidad leve"
      break;
    case 63:
      mensaje = "Lluvia Intensidad moderada"
      break;
    case 65:
      mensaje = "Lluvia Intensidad fuerte"
      break;
    case 66:
      mensaje = "Lluvia helada Intensidad ligera"
      break;
    case 67:
      mensaje = "Lluvia helada Intensidad fuerte"
      break;
    case 71:
      mensaje = " Caída de nieve Intensidad leve"
      break;
    case 73:
      mensaje = "Caída de nieve moderada"
      break;
    case 75:
      mensaje = "Caída de nieve fuerte"
      break;
    case 77:
      mensaje = "Granos de nieve"
      break;
    case 80:
      mensaje = "Lluvias leves"
      break;
    case 81:
      mensaje = "Lluvias moderadas"
      break;
    case 82:
      mensaje = "Lluvias violentas"
      break;
    case 85:
      mensaje = "Chubascos de nieve ligeros"
      break;
    case 86:
      mensaje = "Chubascos de nieve fuertes"
      break;
    case 95:
      mensaje = "Tormenta"
      break;
    case 96:
      mensaje = "Tormenta con granizo leve"
      break;
    case 99:
      mensaje = "Tormenta con granizo fuerte"
      break;

    default:
      mensaje = "Cielo limpio"
      break;
  }

  return (
    <>
      <div >
        {error && <li> Error : {error}  </li>}
        {loading && <li> Loading...   </li>}
        <br />
        <p><img src={Icons(weather && weather.current.weathercode)} alt="iconos" className="rounded float-start" /> </p>

        <h1 className='temp'>{weather && weather.current.temperature_2m.toFixed(0)} {weather && weather.current_units.temperature_2m}</h1>
        <h2>{mensaje}</h2>
        <br />
        <p className='extremos'>Sensacion termica: <SensacionTermica /> </p>
        <br />
        <p className='fecha'> {f.format(today)} </p>

      </div>

    </>
  )
}

export default Weather