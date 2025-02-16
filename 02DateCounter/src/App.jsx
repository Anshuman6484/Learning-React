import { useState } from 'react'
import { MinusCircle, PlusCircle } from 'lucide-react'
import './App.css'

export default function App() {
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0)
  const [date, setDate] = useState(new Date())

  function updateDate(days) {
    setDate((prevDate) => {
      const newDate = new Date(prevDate)
      newDate.setDate(newDate.getDate() + days)
      return newDate
    })
  }

  function handleStepIncrease() {
    setStep((s) => s + 1)
  }
  function handleStepDecrease() {
    setStep((s) => s - 1)
  }
  function handleCountIncrease() {
    setCount((c) => c + step)
    updateDate(step)
  }
  function handleCountDecrease() {
    setCount((c) => c - step)
    updateDate(-step)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold p-4">DATE COUNTER</h1>
      <div className="bg-white p-8 rounded-lg shadow-xl border flex flex-col items-center space-y-6">
        {/* Step Counter */}
        <div className="flex items-center space-x-4">
          <button
            className="text-blue-500 cursor-pointer hover:text-blue-600 transition"
            onClick={handleStepDecrease}
          >
            <MinusCircle size={36} />
          </button>
          <span className="text-xl font-semibold">Step : {step}</span>
          <button
            className="text-blue-500 cursor-pointer hover:text-blue-600 transition"
            onClick={handleStepIncrease}
          >
            <PlusCircle size={36} />
          </button>
        </div>

        {/* Count Counter */}
        <div className="flex items-center space-x-4">
          <button
            className="text-green-500 cursor-pointer hover:text-green-600 transition"
            onClick={handleCountDecrease}
          >
            <MinusCircle size={36} />
          </button>
          <span className="text-xl font-semibold">Count : {count}</span>
          <button
            className="text-green-500 cursor-pointer hover:text-green-600 transition"
            onClick={handleCountIncrease}
          >
            <PlusCircle size={36} />
          </button>
        </div>

        {/* Display Current Date */}
        <div className="bg-gray-200 px-6 py-3 rounded-lg text-lg font-semibold shadow-md mb-4">
          {count === 0
            ? 'Today is '
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days before today was `}
          {date.toDateString()}
        </div>
      </div>
    </div>
  )
}
