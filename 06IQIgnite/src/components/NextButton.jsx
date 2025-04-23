export default function NextButton({ dispatch, answer, currQuestion, totalQuestions }) {
  if (answer === null) return null
  const isLastQuestion = currQuestion === totalQuestions

  return (
    <div className="flex justify-center mt-6">
      <button
        onClick={() =>
          dispatch({ type: isLastQuestion ? 'complete' : 'nextQuestion' })
        }
        className={`px-6 py-2 text-lg font-bold rounded-full transition-all shadow-md cursor-pointer bg-[#fb8500] text-white hover:bg-[#e07b00] transform hover:scale-105
          `}
      >
        {isLastQuestion ? 'Finish Quiz' : 'Next Question →'}
      </button>
    </div>
  )
}
