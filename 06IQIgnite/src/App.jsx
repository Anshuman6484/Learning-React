import { useEffect, useReducer } from 'react'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import Loader from './components/Loader'
import Error from './components/Error'
import WelcomeScreen from './components/WelcomeScreen'
import ProgressBar from './components/ProgressBar'
import Question from './components/Question'
import NextButton from './components/NextButton'
import EndScreen from './components/EndScreen'

const initialState = {
  questions: [],
  status: 'loading',
  currIndex: 0,
  answer: null,
  score: 0,
}

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: 'ready',
      }
    case 'error':
      return {
        ...state,
        status: 'error',
      }
    case 'start':
      return {
        ...state,
        status: 'active',
      }
    case 'newAnswer': {
      const question = state.questions.at(state.currIndex)
      return {
        ...state,
        answer: action.payload,
        score:
          action.payload === question.correct_answer
            ? state.score + 10
            : state.score,
      }
    }
    case 'nextQuestion':
      return {
        ...state,
        currIndex: state.currIndex + 1,
        answer: null,
      }
    case 'complete':
      return {
        ...state,
        status: 'complete',
      }
    case 'restart':
      return {
        ...initialState,
        questions: state.questions,
        status: 'ready',
      }
    default:
      throw new Error('Unknown action : ' + action.type)
  }
}

export default function App() {
  const [{ questions, status, currIndex, answer, score }, dispatch] =
    useReducer(reducer, initialState)

  useEffect(function () {
    async function fetchQuestions() {
      try {
        const res = await fetch(
          'https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple'
        )
        const data = await res.json()
        dispatch({ type: 'dataReceived', payload: data.results })
      } catch (err) {
        console.log(err)
        dispatch({ type: 'error' })
      }
    }
    fetchQuestions()
  }, [])

  return (
    <div className="w-full min-h-screen bg-gray-950 flex flex-col items-center p-6 text-white">
      <Header />
      <Content>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <WelcomeScreen dispatch={dispatch} />}
        {status === 'active' && (
          <>
            <ProgressBar
              currQuestion={currIndex + 1}
              totalQuestions={questions.length}
              score={score}
            />
            <Question
              question={questions[currIndex]}
              dispatch={dispatch}
              answer={answer}
            />
            <NextButton
              dispatch={dispatch}
              answer={answer}
              currQuestion={currIndex + 1}
              totalQuestions={questions.length}
            />
          </>
        )}
        {status === 'complete' && (
          <EndScreen score={score} dispatch={dispatch} />
        )}
      </Content>
    </div>
  )
}
