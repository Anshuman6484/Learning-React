import React from 'react'
import CityItem from '../components/CityItem'

function CityList({ cities, isLoading }) {
  return (
    <div className="max-w-md mx-auto mt-10">
      {isLoading ? (
        <p className="text-gray-800 text-center  font-bold text-2xl">Loading...</p>
      ) : cities.length === 0 ? (
        <h1 className="text-gray-800 text-center font-bold text-2xl">
          Add a city by clicking on the map 
        </h1>
      ) : (
        <ul>
          {cities.map((city) => (
            <CityItem key={city.id} city={city} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default CityList
