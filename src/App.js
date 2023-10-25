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
import './App.css';


function App() {
  return (
    <div>
    <head> 
      
    </head>
    <body>
    <Navbar/>  
        <div className='container p-5 my-3 '>
          <div className='row'>
              <div className='col principal col-lg-4'>
              <Weather/>
              </div>

            <div className='col col-lg-7 '>
              <div >
                <Cuadro />
              </div>

              <div className='row segundo'>
                <div className='col extremos'>
                  <UV/>
                </div>
                
                <div className='col extremos'>
                 <VelocidadViento/>
                </div>

                <div className='col extremos'>
                <Amanecer/>
                </div>

          </div>

            </div>
            
          </div>

          
          <div className='row'>
            <div className='col col-lg-4'>
              
              <div className='row extremos'>
               <TempMax/>    <TempMin/> 

              </div>
            </div>
           
            <div className='col extremos '>
             <Humedad/>
            </div>

            <div className='col extremos' >
              Visibilidad <Visibilidad/>
            </div>

            <div className='col extremos'>
            Precipitacion <Precipitacion/>

            </div>

          </div>


        </div>
       
    </body>

    </div>
  );
}

export default App;


