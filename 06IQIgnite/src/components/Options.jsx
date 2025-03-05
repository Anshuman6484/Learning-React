import he from 'he'

export default function Options({ options, dispatch, correctAnswer, selectedAnswer }) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {options.map((option, index) => (
        <button
          key={index}
          className={
            `bg-[#219ebc] cursor-pointer text-white text-lg py-2 px-4 rounded-full transition-all shadow-md text-left transform hover:scale-105` +
            (selectedAnswer === option
              ? option === correctAnswer
                ? ' bg-green-500'
                : ' bg-red-500'
              : ' hover:bg-[#fd9e02]') +
            (selectedAnswer ? ' cursor-not-allowed' : '')
          }
          onClick={() =>
            !selectedAnswer && dispatch({ type: 'newAnswer', payload: option })
          }
          disabled={!!selectedAnswer}
        >
          {he.decode(option)}
        </button>
      ))}
    </div>
  )
}
