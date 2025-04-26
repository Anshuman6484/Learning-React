import React from 'react'
import { Outlet } from 'react-router-dom'
import AppNav from '../components/AppNav'

function Trek() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-green-600">Trek</h1>
      <div className="flex justify-center">
        <AppNav />
      </div>
      <div className="p-4 rounded-xl">
        <Outlet />
      </div>
    </div>
  )
}

export default Trek
