import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css' // Import Leaflet's CSS
import { useCities } from '../hooks/useCities'

function Map() {
  // const navigate = useNavigate()

  const { cities } = useCities()

  const [mapPosition, setMapPosition] = useState([-33.8688, 151.2093])

  const [searchParams] = useSearchParams()

  useEffect(() => {
    const lat = parseFloat(searchParams.get('lat'))
    const lng = parseFloat(searchParams.get('lng'))
    if (!isNaN(lat) && !isNaN(lng)) {
      setMapPosition([lat, lng])
    }
  }, [searchParams])

  return (
    <div style={{ height: '500px' }}>
      {' '}
      {/* Fix height of map container */}
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
        className="h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup className="bg-gray-800 border-l-4 border-green-500">
              <span>{city.flag}</span>
              <h3>{city.city}</h3>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPosition} />
      </MapContainer>
    </div>
  )
}

function ChangeCenter({ position }) {
  const map = useMap()
  map.setView(position)
  return null
}

export default Map
