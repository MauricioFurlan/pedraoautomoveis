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
            <Marker position={position} onClick={()=>window.location.href = "https://www.google.com.br/maps/place/Pedr%C3%A3o+Autom%C3%B3veis/@-23.0887881,-47.2035589,17z/data=!3m1!4b1!4m5!3m4!1s0x94c8b5c55533f683:0x70ac5378f7b13313!8m2!3d-23.088793!4d-47.2013649"} options={{
              label: {
                text: "Pedrão Automóveis",
                className: "map-marker"
              },
            }
            }></Marker>
          </GoogleMap>
        ) : <></>
      }
    
  </div>
  ) 
}

export default MapPage;