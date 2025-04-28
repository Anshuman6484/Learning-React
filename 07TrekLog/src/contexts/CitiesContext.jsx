import { createContext, useEffect, useState } from 'react'
import axios from 'axios'

const CitiesContext = createContext()

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [currentCity, setCurrentCity] = useState({})

  useEffect(() => {
    const fetchCities = async () => {
      try {
        setIsLoading(true)
        const res = await axios.get('http://localhost:3000/cities')
        setCities(res.data)
      } catch (err) {
        console.log('Error fetching cities', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCities()
  }, [])

  const getCity = async (id) => {
    try {
      setIsLoading(true)
      const res = await axios.get(`http://localhost:3000/cities/${id}`)
      console.log(res)
      setCurrentCity(res.data)
    } catch (err) {
      console.log('Error fetching current city', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <CitiesContext.Provider value={{ cities, isLoading, currentCity, getCity, setCurrentCity }}>
      {children}
    </CitiesContext.Provider>
  )
}

export { CitiesProvider, CitiesContext }
