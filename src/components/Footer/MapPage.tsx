import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import './MapPage.css';
const MapPage = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCi_5dLvhOCt92cyWOTq8--c6Cu0peYQRs"
  })
  const position = {
    lat: -23.088842332016643,
    lng:  -47.2013756309954
  }

  return (
    <div className='map'>
      {
        isLoaded ? (
          <GoogleMap
            mapContainerStyle={{width: '100%', height: '100%'}}
            center={position}
            zoom={15}
            >
            <Marker position={position} options={{
              label: {
                text: "Pedrão Automóveis",
                className: "map-marker"
              },
            }}></Marker>
          </GoogleMap>
        ) : <></>
      }
    
  </div>
  ) 
}

export default MapPage;