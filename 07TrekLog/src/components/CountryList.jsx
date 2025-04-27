import React from 'react'
import CountryItem from '../components/CountryItem'
import { useCities } from '../hooks/useCities'

function CountryList() {
  const { cities, isLoading } = useCities()
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [
        ...arr,
        {
          id: city.id,
          country: city.country,
          flag: city.flag,
          date: city.date,
        },
      ]
    } else {
      return arr
    }
  }, [])

  return (
    <div className="max-w-md mx-auto mt-10">
      {isLoading ? (
        <p className="text-gray-800 text-center  font-bold text-2xl">
          Loading...
        </p>
      ) : countries.length === 0 ? (
        <h1 className="text-gray-800 text-center font-bold text-2xl">
          Add a city by clicking on the map
        </h1>
      ) : (
        <ul>
          {countries.map((country) => (
            <CountryItem key={country.id} country={country} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default CountryList
