export default function EndScreen({ score, dispatch }) {
  return (
    <div className="p-8 rounded-lg text-white mb-6 max-w-3xl mx-auto  text-center animate-fade-in">
      <div className="flex flex-col items-center mb-6">
        <h2 className="text-4xl font-extrabold mb-2 text-yellow-400">
          🎉 Congratulations! 🎉
        </h2>
        <p className="text-lg mb-4 text-[#f4a261]">
          You’ve completed the quiz with a score of{' '}
          <strong className="text-3xl text-white">{score}</strong> out of 100!
        </p>
        <p className="text-lg mb-8 text-[#f4a261]">
          Awesome job! Keep sharpening your skills. 💪
        </p>
        <div className="flex space-x-4">
          <button
            className="bg-[#219ebc] cursor-pointer px-6 py-2 rounded-full text-lg font-bold text-white hover:bg-[#126782] transition-colors shadow-md"
            onClick={() => dispatch({ type: 'restart' })}
          >
            Retake Quiz
          </button>
        </div>
      </div>
    </div>
  )
}
