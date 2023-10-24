import  {useEffect, useState} from 'react'

export function useFetch(urlApi){

const [weather, setWeather] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  setLoading(true);
  fetch(urlApi)
    .then((response) => response.json())
    .then((weather) => setWeather(weather))
    .catch((error) => setError(error))
    .finally(() => setLoading(false));
}, [urlApi]);

    return {weather, loading,error};
}