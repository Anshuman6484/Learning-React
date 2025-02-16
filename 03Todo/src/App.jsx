import { useState } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid' // to generate unique ids
import './App.css'

export default function App() {
  const [taskDescription, setTaskDescription] = useState('')
  const [tasks, setTasks] = useState([])
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-purple-400 to-blue-500 p-6 items-center">
      <Title />
      <div className="max-w-3xl w-full bg-white p-6 rounded-lg shadow-lg">
        <Input
          setTaskDescription={setTaskDescription}
          taskDescription={taskDescription}
          tasks={tasks}
          setTasks={setTasks}
        />
        <List tasks={tasks} setTasks={setTasks} />
      </div>
      <Footer />
    </div>
  )
}

function Title() {
  return (
    <h1 className="text-4xl font-extrabold text-white mb-6">📌 TODO LIST</h1>
  )
}
function Input({ taskDescription, setTaskDescription, tasks, setTasks }) {
  function handleSubmit(e) {
    e.preventDefault()
    console.log(e)
    if (!taskDescription.trim()) return
    const newTask = {
      id: nanoid(),
      task: taskDescription,
      isDone: false,
    }
    console.log(newTask)
    setTaskDescription('')
    setTasks([...tasks, newTask])
  }
  return (
    <form className="flex items-center space-x-4 mb-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What do you need to do?"
        className="flex-1 px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <button className="px-6 py-3 bg-green-500 cursor-pointer text-white font-semibold rounded-lg hover:bg-green-600 transition">
        ➕ Add Task
      </button>
    </form>
  )
}
function List({ tasks, setTasks }) {
  return (
    <div className="space-y-3 mt-2">
      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center">No tasks yet. Add some! 🚀</p>
      ) : (
        tasks.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            tasks={tasks}
            setTasks={setTasks}
          />
        ))
      )}
    </div>
  )
}
function ListItem({ item, tasks, setTasks }) {
  const { id, task, isDone } = item
  function handleChange(e, id) {
    console.log(e)
    setTasks((prevtasks) =>
      prevtasks.map((item) =>
        item.id === id ? { ...item, isDone: e.target.checked } : item
      )
    )
  }
  function handleClick(id) {
    setTasks(tasks.filter((item) => item.id !== id))
  }
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-gray-100 rounded-lg shadow">
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          className="w-5 h-5 text-blue-500 rounded cursor-pointer"
          checked={isDone}
          onChange={(e) => handleChange(e, id)}
        />
        <span
          className={`text-gray-800 font-medium ${
            isDone ? 'line-through' : ''
          }`}
        >
          {task}
        </span>
      </div>
      <button
        className="text-red-500 hover:text-red-600 text-xl cursor-pointer"
        onClick={() => handleClick(id)}
      >
        ❌
      </button>
    </div>
  )
}
function Footer() {
  return (
    <footer className="mt-auto py-4 text-white text-center text-sm">
      Made with 💜 for You | Powered by React & Tailwind CSS
    </footer>
  )
}

ListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    task: PropTypes.string,
    isDone: PropTypes.bool,
  }).isRequired,
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
}

Input.propTypes = {
  taskDescription: PropTypes.string,
  setTaskDescription: PropTypes.func,
  tasks: PropTypes.array,
  setTasks: PropTypes.func,
}
List.propTypes = {
  tasks: PropTypes.array,
  setTasks: PropTypes.func,
}
