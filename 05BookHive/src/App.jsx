import './App.css'

export default function App() {
  return (
    <div className="flex flex-col h-screen bg-emerald-50">
      <Header />
      <main className="flex flex-1 container mx-auto p-6 space-x-6">
        <LeftSection />
        <RightSection />
      </main>
    </div>
  )
}

function Header() {
  return (
    <header className="bg-emerald-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">BOOK HIVE</h1>
        <div className="flex items-center space-x-4">
          <input
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

function LeftSection() {
  return (
    <section className="w-1/2 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-emerald-800 mb-4">
        Search Results
      </h2>
      <ul className="space-y-2">
        <li className="p-3 bg-emerald-100 rounded-lg hover:bg-emerald-200 cursor-pointer">
          Book 1
        </li>
        <li className="p-3 bg-emerald-100 rounded-lg hover:bg-emerald-200 cursor-pointer">
          Book 2
        </li>
        <li className="p-3 bg-emerald-100 rounded-lg hover:bg-emerald-200 cursor-pointer">
          Book 3
        </li>
        <li className="p-3 bg-emerald-100 rounded-lg hover:bg-emerald-200 cursor-pointer">
          Book 4
        </li>
      </ul>
    </section>
  )
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
