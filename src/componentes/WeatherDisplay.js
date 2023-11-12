import React, { useState, useEffect } from 'react';

const WeatherDisplay = () => {
  const [isDay, setIsDay] = useState(true);

  useEffect(() => {

    const updateDayNightStatus = () => {
      const now = new Date();
      const currentHour = now.getHours();

      // Cambia entre día y noche según el rango de horas
      if (currentHour >= 6 && currentHour < 18) {
        setIsDay(true); // Día
      } else {
        setIsDay(false); // Noche
      }
    };

      // Llama a la función al montar el componente
      updateDayNightStatus();

      // Actualiza el estado cada minuto
      const intervalId = setInterval(updateDayNightStatus, 60000);
  
      // Limpia el intervalo cuando el componente se desmonta
      return () => clearInterval(intervalId);
    }, []);

  return (
    <div className="text-center m-0 p-0"  >
      <img src={isDay ? 'icons/dia.jpg' : 'icons/noche.jpg'} alt="App" 
      style={{ transition: "opacity 5s ease-in-out", width: '100%', height: '100%', opacity: 0.9}} />
    </div>
  );
};

export default WeatherDisplay;
