import React from 'react';
import { Line } from 'react-chartjs-2';
import { useFetch } from '../useFetch'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
  } from "chart.js";
 
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );
  
  const options = {
    fill: true,
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 2,
    scales: {
      y: {
        min: 0,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

 

const Cuadro = () => {
    const {weather, loading,error} = useFetch("https://api.open-meteo.com/v1/forecast?latitude=-34&longitude=-64&hourly=temperature_2m&timezone=auto&forecast_days=1");
    const data = {
    labels: weather && weather.hourly &&weather.hourly.time.map((hour) => hour.slice(-5)),
    datasets: [
      {
        label: 'Temperatura (°C)',
        data: weather  && weather.hourly && weather.hourly.temperature_2m.map((hour) => hour),
        fill: true,
        borderColor: 'rgb(212, 184, 241)',
        borderWidth: 2,
        tension: 0.3,
        pointRadius: 6,
        pointBackgroundColor: "beige",
        backgroundColor: 'rgb(212, 184, 241)',
      },
    ],
  };

  return (
    <div style={{ width: '750px', height: '200px' }}>
        {error && <li> Error : {error}  </li>}
        {loading && <li> Loading...   </li>}
        <Line data={data} options={options}/>
    </div>
  );
};

export default Cuadro;
