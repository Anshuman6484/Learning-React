import React from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useCities } from '../hooks/useCities'
import Spinner from './Spinner'
import Button from './Button'

function City() {
  console.log('City component rendered')

  const id = useParams().id
  console.log(id)

  const { currentCity, getCity, isLoading } = useCities()

  const navigate = useNavigate()

  useEffect(() => {
    getCity(id)
  }, [id])

  // const { name = '', flag = '', notes = '', date = '' } = currentCity
  const { name, notes, date } = currentCity
  console.log(currentCity)

  // const formattedDate = new Intl.DateTimeFormat('en', {
  //   weekday: 'long',
  //   year: 'numeric',
  //   month: 'long',
  //   day: 'numeric',
  // }).format(new Date(date))

  if (isLoading) return <Spinner />

  return (
    <div className="bg-gray-800 text-gray-100 p-6 rounded-2xl border-l-4 border-t-4 border-green-500 shadow-md max-w-md mx-auto">
      <div className="text-sm text-gray-400 mb-2">CITY NAME</div>
      <h2 className="text-2xl text-green-500 font-semibold mb-4 flex items-center gap-2">
        {name?.toUpperCase()}
      </h2>

      <div className="text-sm text-gray-400 mb-1">
        YOU WENT TO {name?.toUpperCase()} ON
      </div>
      <p className="text-lg mb-4">{date}</p>

      <div className="text-sm text-gray-400 mb-1">YOUR NOTES</div>
      <p className="text-base mb-6">{notes}</p>

      <div className="text-sm text-gray-400 mb-1">LEARN MORE</div>
      <a
        href={`https://en.wikipedia.org/wiki/${name}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-amber-400 hover:underline text-base font-medium"
      >
        Check out {name} on Wikipedia →
      </a>
      <div className="text-center mt-4">
        <Button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            navigate(-1)
          }}
          className="w-1/2 ml-2 bg-gray-600 hover:bg-gray-700 font-semibold py-2 px-4 rounded-xl transition"
        >
          👈 Back
        </Button>
      </div>
    </div>
  )
}

export default City
