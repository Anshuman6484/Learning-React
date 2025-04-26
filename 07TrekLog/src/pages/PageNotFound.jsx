import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-6xl font-bold text-green-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          Oops! The page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-xl shadow hover:bg-green-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </section>
  )
}
