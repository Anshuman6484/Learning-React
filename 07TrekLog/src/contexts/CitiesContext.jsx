import { createContext, useEffect, useState } from 'react'
import axios from 'axios'

const CitiesContext = createContext()

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([])
  const [isLoading, setIsLoading] = useState(false)

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

  return (
    <CitiesContext.Provider value={{ cities, isLoading }}>
      {children}
    </CitiesContext.Provider>
  )
}

export { CitiesProvider, CitiesContext }
