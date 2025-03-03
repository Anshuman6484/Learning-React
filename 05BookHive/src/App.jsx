import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './App.css'

export default function App() {
  const [books, setBooks] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')
  const [selectedBookId, setSelectedBookId] = useState(null)
  const [readBooks, setReadBooks] = useState([])

  const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY

  function handleOpenBook(id) {
    setSelectedBookId((selectedBookId) => (selectedBookId === id ? null : id))
  }

  function handleCloseBook() {
    setSelectedBookId(null)
  }

  function handleReadBook(book) {
    setReadBooks((readBooks) => [...readBooks, book])
  }

  function handleDeleteBook(id) {
    setReadBooks((readBooks) => readBooks.filter((book) => book.id !== id))
  }

  useEffect(
    function () {
      const controller = new AbortController()

      async function fetchBooks() {
        try {
          setIsLoading(true)
          setError(null)
          // console.log("Fetching books for query:", query);
          const res = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`,
            { signal: controller.signal }
          )
          if (!res.ok) throw new Error('Something went wrong')
          const data = await res.json()
          if (query && (!data.items || data.items.length === 0))
            throw new Error('No books found')
          setBooks(data.items)
          setError(null)
        } catch (err) {
          if (err.name !== 'AbortError') setError(err.message)
        } finally {
          setIsLoading(false)
        }
      }
      if (!query) {
        setBooks([])
        setError(null)
        return
      }
      handleCloseBook()
      fetchBooks()

      return function () {
        controller.abort()
      }
    },
    [error, query, API_KEY]
  )

  return (
    <div className="flex flex-col w-screen min-h-screen bg-emerald-50">
      <Header query={query} setQuery={setQuery} />
      <main className="flex flex-1 container mx-auto p-6 space-x-6">
        <LeftSection
          books={books}
          isLoading={isLoading}
          error={error}
          onOpenBook={handleOpenBook}
        />
        <RightSection
          selectedBookId={selectedBookId}
          onCloseBook={handleCloseBook}
          API_KEY={API_KEY}
          onReadBook={handleReadBook}
          readBooks={readBooks}
          onDeleteBook={handleDeleteBook}
        />
      </main>
    </div>
  )
}

function Header({ query, setQuery }) {
  return (
    <header className="bg-emerald-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">📚 BOOK HIVE</h1>
        <div className="flex items-center space-x-4">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search books..."
            className="px-4 py-2 rounded-lg border border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  query: PropTypes.string,
  setQuery: PropTypes.func,
}

function LeftSection({ books, isLoading, error, onOpenBook }) {
  return (
    <section className="w-1/2 bg-white p-6 rounded-lg shadow-md">
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {!isLoading && !error && (
        <>
          {books.length === 0 ? (
            <h2 className="text-xl font-semibold text-emerald-800 mb-4">
              🔍 Find a Book
            </h2>
          ) : (
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
                      onClick={() => onOpenBook(book.id)}
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
                          <p className="text-sm text-emerald-700">
                            {author[0]}
                          </p>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </>
          )}
        </>
      )}
    </section>
  )
}

LeftSection.propTypes = {
  books: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  onOpenBook: PropTypes.func.isRequired,
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

function RightSection({
  selectedBookId,
  onCloseBook,
  API_KEY,
  onReadBook,
  readBooks,
  onDeleteBook,
}) {
  return (
    <section className="w-1/2 bg-white p-4 rounded-lg shadow-md">
      {selectedBookId ? (
        <SelectedBook
          selectedBookId={selectedBookId}
          onCloseBook={onCloseBook}
          API_KEY={API_KEY}
          onReadBook={onReadBook}
          readBooks={readBooks}
        />
      ) : (
        <ReadBooksList readBooks={readBooks} onDeleteBook={onDeleteBook} />
      )}
    </section>
  )
}

RightSection.propTypes = {
  selectedBookId: PropTypes.string,
  onCloseBook: PropTypes.func.isRequired,
  API_KEY: PropTypes.string,
  onReadBook: PropTypes.func.isRequired,
  readBooks: PropTypes.array.isRequired,
  onDeleteBook: PropTypes.func.isRequired,
}

function ReadBooksList({ readBooks, onDeleteBook }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-emerald-800 mb-4">
        🔖 Reading Progress
      </h2>
      <p className="text-emerald-700 mb-4">
        You&apos;ve read{' '}
        <span className="font-bold">{readBooks.length} books</span> so far!
      </p>
      <ul className="space-y-2">
        {readBooks.map((book) => (
          <li
            key={book.id}
            className="p-3 bg-emerald-100 rounded-lg hover:bg-emerald-200"
          >
            <div className="flex items-center space-x-4">
              <img
                src={book.thumbnail}
                alt={book.title}
                className="w-12 h-18 object-cover rounded"
              />
              <div className="flex flex-col justify-center text-center flex-1">
                <h4 className="font-semibold text-emerald-800">{book.title}</h4>
                <p className="text-sm text-emerald-700">
                  {book.authors?.join(', ')}
                </p>
              </div>
              <button
                onClick={() => onDeleteBook(book.id)}
                className="p-1 bg-red-500 text-white rounded-full shadow hover:bg-red-600 transition duration-300 transform hover:scale-105 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

ReadBooksList.propTypes = {
  readBooks: PropTypes.array.isRequired,
  onDeleteBook: PropTypes.func.isRequired,
}

function SelectedBook({ selectedBookId, onCloseBook, onReadBook, readBooks }) {
  const [selectedBook, setSelectedBook] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(
    function () {
      async function fetchBookDetails() {
        setIsLoading(true)
        const res = await fetch(
          `https://www.googleapis.com/books/v1/volumes/${selectedBookId}?projection=lite`
        )
        const book = await res.json()
        setSelectedBook(book)
        setIsLoading(false)
      }
      if (selectedBookId) fetchBookDetails()
    },
    [selectedBookId]
  )

  const title = selectedBook?.volumeInfo?.title
  const authors = selectedBook?.volumeInfo?.authors
  const description = selectedBook?.volumeInfo?.description
  const thumbnail = selectedBook?.volumeInfo?.imageLinks?.thumbnail
  const previewLink = selectedBook?.volumeInfo?.previewLink

  useEffect(
    function () {
      if (!title) return
      document.title = `Book | ${title}`

      return function () {
        document.title = 'Book Hive'
      }
    },
    [title]
  )

  const isRead = readBooks.map((book) => book.id).includes(selectedBookId)

  function handleAddReadBook() {
    if (selectedBookId) {
      const newReadBook = { id: selectedBookId, title, authors, thumbnail }
      onReadBook(newReadBook)
      onCloseBook()
    }
  }

  useEffect(
    function () {
      function handleKeyDown(e) {
        if (e.code === 'Escape') {
          onCloseBook()
        }
      }
      document.addEventListener('keydown', handleKeyDown)
      return function () {
        document.removeEventListener('keydown', handleKeyDown)
      }
    },
    [onCloseBook]
  )

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="max-w-md mx-auto p-2 bg-white rounded-lg">
          <button
            className="flex items-center cursor-pointer mb-2 px-2 py-2 bg-emerald-500 text-white rounded-full shadow hover:bg-emerald-600 transition-transform duration-300 transform hover:scale-105"
            onClick={onCloseBook}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l-7 7 7 7M22 12H4"
              />
            </svg>
          </button>

          {thumbnail && (
            <img
              src={thumbnail}
              alt={title}
              className="w-32 h-auto mb-4 mx-auto rounded-md shadow"
            />
          )}

          <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Author:</span> {authors?.join(', ')}
          </p>
          <div
            className="text-gray-700 mb-4"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>

          <div className="flex justify-center gap-2 mt-2">
            {previewLink && (
              <a
                href={previewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-emerald-500 text-white rounded-md shadow hover:bg-emerald-600 transition duration-300"
              >
                Preview Book
              </a>
            )}

            <button
              className={`px-4 py-2 rounded-md shadow transition duration-300 ${
                isRead
                  ? 'bg-gray-600 text-white cursor-not-allowed'
                  : 'bg-emerald-500 text-white hover:bg-emerald-600 cursor-pointer'
              }`}
              onClick={!isRead ? handleAddReadBook : null}
              disabled={isRead}
            >
              {isRead ? 'Already Read' : '+ Add to Read List'}
            </button>
          </div>
        </div>
      )}
    </>
  )
}

SelectedBook.propTypes = {
  selectedBookId: PropTypes.string,
  onCloseBook: PropTypes.func.isRequired,
  API_KEY: PropTypes.string,
  onReadBook: PropTypes.func.isRequired,
  readBooks: PropTypes.array.isRequired,
}
