import React from 'react'
import { X } from 'lucide-react'

function CountryItem({ country }) {
  return (
    <li className="flex cursor-pointer items-center justify-between bg-gray-800 text-white px-4 py-3 rounded-lg mb-3 border-l-4 border-green-500 shadow">
      <div className="flex items-center gap-3">
        <span className="text-xl">{country.flag}</span>
        <div className="font-medium text-lg">{country.country}</div>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-sm text-gray-300">({country.date})</div>
        <button className="hover:bg-red-600 p-1 rounded-full cursor-pointer">
          <X size={16} />
        </button>
      </div>
    </li>
  )
}

export default CountryItem
