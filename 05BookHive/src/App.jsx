import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './App.css'

export default function App() {
  const [books, setBooks] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')

  const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY

  useEffect(
    function () {
      async function fetchBooks() {
        try {
          setIsLoading(true)
          setError(null)
          const res = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`
          )
          if (!res.ok) throw new Error('Something went wrong')
          const data = await res.json()
          setBooks(data.items)
        } catch (err) {
          setError(err.message)
        } finally {
          setIsLoading(false)
        }
      }
      if (!query.length) {
        setBooks([])
        setError(null)
        return
      }
      fetchBooks()
    },
    [error, query, API_KEY]
  )

  return (
    <div className="flex flex-col w-screen min-h-screen bg-emerald-50">
      <Header query={query} setQuery={setQuery} />
      <main className="flex flex-1 container mx-auto p-6 space-x-6">
        <LeftSection books={books} isLoading={isLoading} error={error} />
        <RightSection />
      </main>
    </div>
  )
}

function Header({ query, setQuery }) {
  return (
    <header className="bg-emerald-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">BOOK HIVE</h1>
        <div className="flex items-center space-x-4">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search books..."
            className="px-4 py-2 rounded-lg border border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
          <span className="text-white">Found 10 results</span>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  query: PropTypes.string,
  setQuery: PropTypes.func,
}

function LeftSection({ books, isLoading, error }) {
  return (
    <section className="w-1/2 bg-white p-6 rounded-lg shadow-md">
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {!isLoading && !error && (
        <>
          <h2 className="text-xl font-semibold text-emerald-800 mb-4">
            Search Results
          </h2>
          <ul className="space-y-2">
            {books.map((book) => {
              const imgLink = book.volumeInfo.imageLinks?.thumbnail
              const title = book.volumeInfo.title
              const author = book.volumeInfo.authors || ['Unknown author']
              return (
                <li
                  className="p-3 bg-emerald-100 rounded-lg hover:bg-emerald-200 cursor-pointer"
                  key={book.id}
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={imgLink}
                      alt="Book Cover"
                      className="w-12 h-18 object-cover rounded"
                    />
                    <div className="flex flex-col justify-center text-center flex-1">
                      <h3 className="font-semibold text-emerald-800">
                        {title}
                      </h3>
                      <p className="text-sm text-emerald-700">{author[0]}</p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </>
      )}
    </section>
  )
}

LeftSection.propTypes = {
  books: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
}

function Loader() {
  return <h1 className="text-emerald-700 font-semibold text-lg">LOADING...</h1>
}

function ErrorMessage({ message }) {
  return (
    <h1 className="text-red-700 font-semibold text-lg">
      <span>🚫</span>
      {message}
    </h1>
  )
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
}

function RightSection() {
  return (
    <section className="w-1/2 bg-white p-6 rounded-lg shadow-md">
      <div className="mb-6 shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold text-emerald-800 mb-4">
          Reading Progress
        </h2>
        <p className="text-emerald-700">
          You&apos;ve read <span className="font-bold">3 books</span> so far!
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-emerald-800 mb-2">
          Read Books
        </h3>
        <ul className="space-y-2">
          <li className="p-3 bg-emerald-100 rounded-lg">Book A</li>
          <li className="p-3 bg-emerald-100 rounded-lg">Book B</li>
          <li className="p-3 bg-emerald-100 rounded-lg">Book C</li>
        </ul>
      </div>
    </section>
  )
}
