import React from 'react'
import { NavLink } from 'react-router-dom'

function AppNav() {
  return (
    <nav className="flex justify-center mt-6">
      <div className="bg-gray-800 rounded-xl flex gap-2 shadow-lg">
        <NavLink
          to="cities"
          className={({ isActive }) =>
            `px-6 py-2 rounded-xl font-medium transition-all duration-200 ${
              isActive
                ? 'bg-green-600 text-white'
                : 'text-white'
            }`
          }
        >
          Cities
        </NavLink>
        <NavLink
          to="countries"
          className={({ isActive }) =>
            `px-6 py-2 rounded-xl font-medium transition-all duration-200 ${
              isActive
                ? 'bg-green-600 text-white'
                : 'text-white'
            }`
          }
        >
          Countries
        </NavLink>
      </div>
    </nav>
  )
}

export default AppNav
