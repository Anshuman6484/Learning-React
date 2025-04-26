import { useState } from 'react'
import PageNav from '../components/PageNav'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // login logic here
  }

  return (
    <>
      <PageNav />
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-6"
        >
          <h2 className="text-2xl font-semibold text-center text-gray-800">
            Login to TrekLog
          </h2>

          <div className="text-left">
            <label className="block mb-1 font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="example123@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
              className="w-full px-4 py-2 border bg-green-50 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="text-left">
            <label className="block mb-1 font-medium text-gray-700">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="12345678"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
              className="w-full px-4 py-2 border bg-green-50 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md font-semibold hover:bg-green-700 transition"
          >
            Log In
          </button>
        </form>
      </section>
    </>
  )
}
