export default function ProgressBar({ currQuestion, totalQuestions, score }) {
  const progressPercentage = Math.floor((currQuestion / totalQuestions) * 100)

  return (
    <div className="w-full max-w-xl mx-auto mb-6">
      <div className="flex justify-between mb-2 text-white text-lg font-bold">
        <span>
          Question <strong>{currQuestion}</strong> / {totalQuestions}
        </span>
        <span>
          Score <strong>{score}</strong> / {totalQuestions * 10}
        </span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-4">
        <div
          className="bg-[#fb8500] h-4 rounded-full transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  )
}
