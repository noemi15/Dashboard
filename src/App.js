import Navbar from './componentes/Navbar';
import Weather from './componentes/Weather';
import Amanecer from './componentes/Amanecer';
import TempMax from './componentes/TempMax';
import TempMin from './componentes/Temp.Min';
import VelocidadViento from './componentes/VelocidadViento';
import UV from './componentes/UV';
import Humedad from './componentes/Humedad';
import Precipitacion from './componentes/Precipitacion';
import Visibilidad from './componentes/Visibilidad';
import Cuadro from './componentes/Cuadro';
import WeatherDisplay from './componentes/WeatherDisplay';
import SieteDias from './componentes/SieteDias';

import Transporte from './componentesTransporte/Transporte';
import './App.css';


function App() {
  return (
    <div>
      <head>

      </head>
      <body>
        <Navbar />
        <br/><br/>
        <div id="clima" className='container  '>

        <div mx-auto p-2 m-3 style={{ position: 'relative', width: '100%', height: '100vh' }}>
                <WeatherDisplay />
      {/* Agrega el resto del contenido de tu componente Weather aquí */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      

          <div className='row'>
            <div className='col principal col-4'>
              <Weather />
            </div>

            <div className='col  '>
              <div >
                <Cuadro />
              </div>

              <div className='row segundo'>
                <div className='col extremos'>
                  <UV />
                </div>

                <div className='col extremos'>
                  <VelocidadViento />
                </div>

                <div className='col extremos'>
                  <Amanecer />
                </div>

              </div>

            </div>

          </div>


          <div className='row'>
            <div className='col col-4'>

              <div className='row extremos'>
                <TempMax />    <TempMin />

              </div>
            </div>

            <div className='col extremos '>
              <Humedad />
            </div>

            <div className='col extremos ' >
              <Visibilidad />
            </div>

            <div className='col extremos'>
              <Precipitacion />
            </div>
          </div>


          <div className='row'>
            <div className='col'>
              <SieteDias/>
             </div>
             
          </div>


        </div>

        </div>
    </div>


        <br/><br/>
        <div id="transporte" className='container p-5 my-3 transporte '>
          
          <div className="row ">
            <Transporte/>      
          </div>
        </div>

      </body>

    </div>
  );
}

export default App;


