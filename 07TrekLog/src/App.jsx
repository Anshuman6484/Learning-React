import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Homepage'
import Pricing from './pages/Pricing'
import Products from './pages/Products'
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'
import AppLayout from './pages/AppLayout'
import AppNav from './components/AppNav'
import PageNav from './components/PageNav'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="products" element={<Products />} />
            <Route path="login" element={<Login />} />
            <Route path="app" element={<AppLayout />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
