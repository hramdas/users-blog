import { GoogleMap, MarkerF } from '@react-google-maps/api'
import React from 'react'

export default function Map(location) {
  const lat = +location?.lat || 0
  const lng = +location?.lng || 0
  const center = {lat, lng}
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])
  
  return (
    <div>
      <GoogleMap
        mapContainerStyle={{ height: '400px', width: '700px' }}
        center={center}
        zoom={19}
        onLoad={onLoad}
      >
        <MarkerF
          position={center}
        />
      </GoogleMap>
      <div className="map-footer">
        <div></div>
        <div className="map-coordinates">
          <div id='coordinates' ><p>Lat : &nbsp;</p>{lat}</div>
          <div id='coordinates' ><p>Long : &nbsp;</p>{lng}</div>
        </div>
      </div>
    </div>
      
  )
}
