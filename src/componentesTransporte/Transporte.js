import { MapContainer, TileLayer, Marker, Popup} from  'react-leaflet'
import React, { useState, useEffect } from 'react'
import L from 'leaflet';



function Transporte() {

  const [colectivos, setColectivos] = useState([])
  const [selectedRoute, setSelectedRoute] = useState("");
  const [uniqueRouteNames, setUniqueRouteNames] = useState([]);
  const customIcon = {
   "7B": new L.Icon({
    iconUrl: 'iconsTransporte/autobus-verde.png', // Ruta a la imagen de tu icono
    iconSize: [40, 40], // Tamaño del icono
    iconAnchor: [16, 16], // Punto de anclaje del icono (centro)
  }),
  
    "7A": new L.Icon({
     iconUrl: 'iconsTransporte/autobus-rojo.png', // Ruta a la imagen de tu icono
     iconSize: [40, 40], // Tamaño del icono
     iconAnchor: [16, 16], // Punto de anclaje del icono (centro)
   })
  }
  
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url =
          "https://datosabiertos-transporte-apis.buenosaires.gob.ar:443/colectivos/vehiclePositionsSimple?agency_id=14&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6";
        const response = await fetch(url);
        const data = await response.json();

        if (data) {
          const routeNames = new Set();
          data.forEach((colectivo) => {
            routeNames.add(colectivo.route_short_name);
          });
          setUniqueRouteNames(Array.from(routeNames));
        }
    
        setColectivos(data);
      } catch (error) {
        console.error("Error al obtener datos: " + error);
      }
    };

    
    fetchData();

    const interval = setInterval(fetchData, 30000); // Actualizar cada 30 segundos

    return () => {
      clearInterval(interval); // Limpiar el intervalo al desmontar el componente
    };
  }, []);

  const handleRouteChange = (event) => {
    setSelectedRoute(event.target.value);
  };

  return (
    <div>
        <br/>
<select value={selectedRoute} onChange={handleRouteChange} className="btn btn-secondary">
        <option value="">Seleccione una ruta</option>
        {uniqueRouteNames.map((route) => (
          <option key={route} value={route}>
            {route}
          </option>
        ))}
      </select>
          <br/><br/>
      <MapContainer center={[-34.60848, -58.44634]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

  { Array.isArray(colectivos) ? (
  colectivos
  .filter((colectivo) => !selectedRoute || colectivo.route_short_name === selectedRoute)
    .map((colectivo) => (
    <Marker
      key={colectivo.vehicle_id}
      position={[colectivo.latitude, colectivo.longitude]}
      icon={customIcon[colectivo.route_short_name]} 
    >
      <Popup>
        <strong>Línea:</strong> {colectivo.route_short_name}
        <br />
        <strong>Vehiculo ID:</strong> {colectivo.id}
        <br/>
        <strong>Velocidad:</strong> {colectivo.speed}
        <br/>
        <strong>Nombre Agencia:</strong> {colectivo.agency_name}
      </Popup>
    </Marker>
  ))
) : (
  <p>Cargando datos...</p>
)}

      </MapContainer>
    </div>
  )
}

export default Transporte