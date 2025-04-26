import React from 'react'
import PageNav from '../components/PageNav'

function Profile() {
  return (
    <>
      <PageNav />
      <div>
        <div className="text-gray-800 dark:text-white bg-red-600">
          This text will be gray in light mode and white in dark mode.
        </div>
      </div>
    </>
  )
}

export default Profile
