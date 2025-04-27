import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useCities } from '../hooks/useCities'
import Spinner from './Spinner'
import Button from './Button'
import './City.css' // <-- Import the css file

function City() {
  console.log('City component rendered')

  const { id } = useParams()
  const { currentCity, getCity, isLoading } = useCities()
  const navigate = useNavigate()

  useEffect(() => {
    getCity(id)
  }, [id, getCity])

  if (isLoading) return <Spinner />

  const { name, notes, date } = currentCity

  return (
    <div className="card">
      <div className="label">CITY NAME</div>
      <h2 className="heading">{name?.toUpperCase()}</h2>

      <div className="sub-label">YOU WENT TO {name?.toUpperCase()} ON</div>
      <p className="text-lg mb-4">{date}</p>

      <div className="sub-label">YOUR NOTES</div>
      <p className="text-base mb-6">{notes}</p>

      <div className="sub-label">LEARN MORE</div>
      <a
        href={`https://en.wikipedia.org/wiki/${name}`}
        target="_blank"
        rel="noopener noreferrer"
        className="link"
      >
        Check out {name} on Wikipedia →
      </a>

      <div className="button-container">
        <Button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            navigate(-1)
          }}
          className="btn"
        >
          👈 Back
        </Button>
      </div>
    </div>
  )
}

export default City
