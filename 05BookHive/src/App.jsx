import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import './App.css'

export default function App() {
  const [books, setBooks] = useState([])
  const [query, setQuery] = useState('')
  const [selectedBook, setSelectedBook] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  function handleSearch(e) {
    setQuery(e.target.value)
    setSelectedBook(null)
  }

  useEffect(() => {
    const delay = setTimeout(() => {
      if (query.trim() === '') {
        setBooks([])
        return
      }
      async function getBooks() {
        try {
          setIsLoading(true)
          const res = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
              query
            )}&maxResults=40`
          )
          console.log(res)
          setBooks(res.data.items || [])
          setIsLoading(false)
        } catch (err) {
          console.log(err)
        }
      }
      getBooks()
    }, 500)
    return () => clearTimeout(delay)
  }, [query])

  return (
    <div className="min-h-screen min-w-screen bg-green-100 text-gray-700 flex flex-col">
      <div className="max-w-5xl mx-auto flex-grow p-6">
        <Header />
        <Search query={query} onSearch={handleSearch} books={books} />
        <Main
          books={books}
          selectedBook={selectedBook}
          setSelectedBook={setSelectedBook}
          query={query}
          isLoading={isLoading}
        />
      </div>
      <Footer />
    </div>
  )
}

function Header() {
  return <h1 className="text-3xl font-bold text-center mb-6">📚 Book Hive</h1>
}

function Search({ query, onSearch, books }) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search for a book..."
        className="w-lg p-3 border border-green-500 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500"
        value={query}
        onChange={onSearch}
      />
      {query.length > 0 && (
        <div className="mt-4 text-xl font-bold text-gray-600">
          Found {books.length} results
        </div>
      )}
    </div>
  )
}

Search.propTypes = {
  query: PropTypes.string,
  onSearch: PropTypes.func,
  books: PropTypes.array,
}

function Main({ books, selectedBook, setSelectedBook, query, isLoading }) {
  function handleClick(e, book) {
    console.log(book)
    setSelectedBook(book)
  }

  return (
    <div className="grid grid-cols-2 gap-6">
      <LeftSection
        books={books}
        onHandleClick={handleClick}
        isLoading={isLoading}
        query={query}
      />
      <RightSection selectedBook={selectedBook} query={query} />
    </div>
  )
}

Main.propTypes = {
  books: PropTypes.array,
  selectedBook: PropTypes.object,
  setSelectedBook: PropTypes.func,
  query: PropTypes.string,
  isLoading: PropTypes.bool,
}

function LeftSection({ books, onHandleClick, isLoading, query }) {
  return (
    query && (
      <div className="space-y-4 p-4 rounded-lg">
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <>
            <h2 className="text-xl font-semibold mb-3">Search Results</h2>
            <div className="space-y-4">
              {books.map((book) => (
                <div
                  key={book.id}
                  className="flex bg-white p-4 rounded-lg cursor-pointer shadow"
                  onClick={(e) => onHandleClick(e, book)}
                >
                  <div className="w-1/3 flex justify-center">
                    <img
                      src={
                        book.volumeInfo.imageLinks?.thumbnail ||
                        'https://via.placeholder.com/80'
                      }
                      alt="Book Cover"
                      className="w-16 h-24 object-cover"
                    />
                  </div>

                  <div className="w-2/3 flex flex-col justify-center items-center text-center">
                    <h2 className="font-semibold">
                      {book.volumeInfo.title || 'Unknown Title'}
                    </h2>
                    <h4 className="text-sm text-gray-600">
                      {book.volumeInfo.authors?.join(', ') || 'Unknown Author'}
                    </h4>
                    <button className="mt-2 px-3 py-1 bg-green-500 text-white cursor-pointer rounded hover:bg-green-600">
                      Mark as Read
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    )
  )
}

LeftSection.propTypes = {
  books: PropTypes.array,
  onHandleClick: PropTypes.func,
  isLoading: PropTypes.bool,
  query: PropTypes.string,
}

function RightSection({ selectedBook, query }) {
  return (
    query && (
      <div className="flex flex-col gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-center">Books Read</h2>
          <p className="text-gray-600 text-center mt-2">
            You have read <span className="font-bold">X</span> books.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center text-center">
          {selectedBook ? (
            <>
              <h2 className="text-lg font-semibold">
                {selectedBook.volumeInfo.title || 'Unknown Title'}
              </h2>
              <h4 className="text-sm text-gray-600">
                {selectedBook.volumeInfo.authors?.join(', ') ||
                  'Unknown Author'}
              </h4>
              <img
                src={
                  selectedBook.volumeInfo.imageLinks?.thumbnail ||
                  'https://via.placeholder.com/150'
                }
                alt="Book Cover"
                className="w-32 h-48 object-cover mt-2"
              />
              <p className="text-gray-600 mt-2">
                <span className="font-semibold">Published Date:</span>{' '}
                {selectedBook.volumeInfo.publishedDate || 'N/A'}
              </p>
              <p className="text-gray-600 mt-1">
                <span className="font-semibold">Publisher:</span>{' '}
                {selectedBook.volumeInfo.publisher || 'Unknown'}
              </p>
              <p className="text-gray-700 mt-4">
                {selectedBook.volumeInfo.description ||
                  'No description available for this book.'}
              </p>
              <a
                href={selectedBook.volumeInfo.previewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Preview Book
              </a>
            </>
          ) : (
            <p className="text-gray-600">Click on a book to see its details.</p>
          )}
        </div>
      </div>
    )
  )
}

RightSection.propTypes = {
  selectedBook: PropTypes.object,
  query: PropTypes.string,
}

function Footer() {
  return (
    <footer className="text-center p-4 bg-white shadow mt-6">
      <p className="text-sm text-gray-600">Made with ❤️ by Kumar Anshuman</p>
    </footer>
  )
}
