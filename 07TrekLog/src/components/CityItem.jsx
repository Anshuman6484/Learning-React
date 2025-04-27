import React from 'react'
import { X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCities } from '../hooks/useCities'

function CityItem({ city }) {
  function fun(cc) {
    const val = cc
      .toUpperCase()
      .split('')
      .map((x) => 127397 + x.charCodeAt())
    return String.fromCodePoint(...val)
  }

  const { currentCity } = useCities()
  const { id, name, flag, position, date } = city
  return (
    <Link to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
      <li
        className={`flex cursor-pointer items-center justify-between text-white px-4 py-3 rounded-lg mb-3 border-l-4 shadow ${
          id === currentCity.id
            ? 'bg-green-600 border-gray-800'
            : 'border-green-500 bg-gray-800'
        }`}
      >
        <div className="flex items-center gap-3">
          <span className="text-xl">{fun(flag)}</span>
          <div className="font-medium text-lg">{name}</div>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-sm text-gray-300">({date})</div>
          <button className="hover:bg-red-600 p-1 rounded-full cursor-pointer">
            <X size={16} />
          </button>
        </div>
      </li>
    </Link>
  )
}

export default CityItem
