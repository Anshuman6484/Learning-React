import React from 'react'
import { useParams } from 'react-router-dom'

function City() {
  const id = useParams()
  return <div>City</div>
}

export default City
