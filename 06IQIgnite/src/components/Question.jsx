import he from 'he'
import { useState, useEffect } from 'react'
import Options from './Options'

export default function Question({ question, dispatch, answer }) {
  const [options, setOptions] = useState([])

  const correctAnswer = question.correct_answer

  useEffect(
    function () {
      const allOptions = [
        ...question.incorrect_answers,
        question.correct_answer,
      ]
      // Fisher-Yates shuffle algorithm
      for (let i = allOptions.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[allOptions[i], allOptions[j]] = [allOptions[j], allOptions[i]]
      }

      setOptions(allOptions)
    },
    [question]
  )

  return (
    <div className="p-6 rounded-lg text-white mb-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">
        {he.decode(question.question)}
      </h2>
      <Options
        options={options}
        dispatch={dispatch}
        correctAnswer={correctAnswer}
        selectedAnswer={answer}
      />
    </div>
  )
}
