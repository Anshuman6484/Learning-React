import { Link } from 'react-router-dom'
import PageNav from '../components/PageNav'

export default function Home() {
  return (
    <>
      <PageNav />
      <section className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center px-4">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Welcome to <span className="text-green-600">TrekLog</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Record, relive, and cherish every step of your journey. With
            TrekLog, your memories are always just a click away.
          </p>
          <Link
            to="/app"
            className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-xl shadow hover:bg-green-700 transition"
          >
            Start Treking
          </Link>
        </div>
      </section>
    </>
  )
}
