import { NavLink } from 'react-router-dom'

export default function PageNav() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Brand */}
          <NavLink
            to="/"
            className="text-2xl font-bold text-green-700 tracking-wide"
          >
            TrekLog
          </NavLink>

          {/* Navigation NavLinks */}
          <div className="flex items-center space-x-6">
            <NavLink
              to="/product"
              className="text-gray-700 hover:text-green-600 transition duration-200 font-medium"
            >
              Product
            </NavLink>
            <NavLink
              to="/pricing"
              className="text-gray-700 hover:text-green-600 transition duration-200 font-medium"
            >
              Pricing
            </NavLink>
            <NavLink
              to="/login"
              className="px-4 py-2 bg-green-600 text-white font-semibold rounded-xl shadow hover:bg-green-700 transition duration-200"
            >
              Log In
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}
