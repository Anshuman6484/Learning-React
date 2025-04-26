import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

function Map() {
  const navigate = useNavigate()

  const [searchParams, setSearchParams] = useSearchParams()
  const lat = searchParams.get('lat')
  const lng = searchParams.get('lng')
  return (
    <div onClick={() => navigate('form')}>
      <h1>Map</h1>
      <p>Lat: {lat}</p>
      <p>Lng: {lng}</p>
    </div>
  )
}

export default Map
