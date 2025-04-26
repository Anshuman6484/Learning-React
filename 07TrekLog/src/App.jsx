import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Profile from './pages/Profile'
import PageNotFound from './pages/PageNotFound'
import Product from './pages/Product'
import Pricing from './pages/Pricing'
import Login from './pages/Login'
import AppLayout from './pages/AppLayout'
import { useEffect, useState } from 'react'
import axios from 'axios'
import CityList from './components/CityList'
import CountryList from './components/CountryList'
import City from './components/City'
import Form from './components/Form'

function App() {
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
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Navigate replace to={'cities'} />} />
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route path="cities/:id" element={<City />} />
          <Route
            path="countries"
            element={<CountryList cities={cities} isLoading={isLoading} />}
          />
          <Route path="form" element={<Form />} />
        </Route>
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}

export default App
