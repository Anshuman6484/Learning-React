import React from 'react'
import PageNav from '../components/PageNav'
import Trek from '../pages/Trek'
import Map from '../pages/Map'

function AppLayout() {
  return (
    <>
      <PageNav />
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
        <div className="flex flex-col lg:flex-row gap-6 p-6 max-w-7xl justify-center items-center mx-auto">
          <div className="flex-1 rounded-2xl p-4 h-full">
            <Trek />
          </div>
          <div className="flex-1 p-4 rounded-2xl h-full">
            <Map />
          </div>
        </div>
      </div>
    </>
  )
}

export default AppLayout
