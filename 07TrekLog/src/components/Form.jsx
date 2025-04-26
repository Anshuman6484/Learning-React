import { useState } from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

function Form() {
  const navigate = useNavigate()

  const [cityName, setCityName] = useState('')
  const [country, setCountry] = useState('')
  const [date, setDate] = useState(new Date().toISOString().split('T')[0])
  const [notes, setNotes] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const newLog = { cityName, country, date, notes }
    console.log(newLog)

    // Reset form
    setCityName('')
    setCountry('')
    setDate(new Date().toISOString().split('T')[0])
    setNotes('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg space-y-6 mt-10"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Add a New Place
      </h2>

      <div className="flex flex-col space-y-2">
        <label htmlFor="city" className="text-gray-600 font-medium">
          City Name
        </label>
        <input
          type="text"
          id="city"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter city name"
          required
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="country" className="text-gray-600 font-medium">
          Country
        </label>
        <input
          type="text"
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter country"
          required
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="date" className="text-gray-600 font-medium">
          Date of Visit
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(new Date(e.target.value))}
          className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="notes" className="text-gray-600 font-medium">
          Notes
        </label>
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows="4"
          className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="What did you love about it?"
        />
      </div>

      <div className="flex justify-between items-center mt-6">
        <Button
          type="submit"
          className="w-1/2 mr-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-xl transition"
        >
          ➕ Add Place
        </Button>

        <Button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            navigate(-1)
          }}
          className="w-1/2 ml-2 bg-gray-600 hover:bg-gray-800 font-semibold py-2 px-4 rounded-xl transition"
        >
          👈 Back
        </Button>
      </div>
    </form>
  )
}

export default Form
