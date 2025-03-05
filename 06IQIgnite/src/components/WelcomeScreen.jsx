export default function WelcomeScreen({ dispatch }) {
  return (
    <div className="flex flex-col items-center justify-start w-full px-6 py-12 text-white  max-w-4xl mx-auto">
      <h1 className="text-5xl font-extrabold mb-4 text-center text-[#219ebc]">
        🚀 Welcome to IQIgnite!
      </h1>
      <p className="text-2xl mb-6 text-center">
        Get ready to challenge your knowledge and have some fun!
      </p>
      <p className="text-lg mb-8 text-center">
        Answer exciting questions, test your skills, and become a quiz master!
      </p>
      <button
        className="bg-[#fb8500] cursor-pointer text-white px-8 py-3 rounded-lg font-bold text-xl hover:bg-[#e07b00] transition-colors"
        onClick={() => dispatch({ type: 'start' })}
      >
        Start Quiz
      </button>
    </div>
  )
}
