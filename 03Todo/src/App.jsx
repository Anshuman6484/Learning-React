import { useState } from 'react'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'
import './App.css'

export default function App() {
  const [taskDescription, setTaskDescription] = useState('')
  const [tasks, setTasks] = useState([])

  function handleAddTask(task) {
    if (!task.trim()) return
    const newTask = { id: nanoid(), task, isDone: false }
    setTasks([...tasks, newTask])
  }

  function handleToggleTask(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    )
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 p-6 items-center">
      <Title />
      <div className="max-w-3xl w-full bg-white p-6 rounded-2xl shadow-xl">
        <Input
          taskDescription={taskDescription}
          setTaskDescription={setTaskDescription}
          onAddTask={handleAddTask}
        />
        <List
          tasks={tasks}
          onToggleTask={handleToggleTask}
          onDeleteTask={handleDeleteTask}
        />
      </div>
      <Footer tasks={tasks} />
    </div>
  )
}

function Title() {
  return (
    <h1 className="text-4xl font-extrabold text-white mb-6">📌 TODO LIST</h1>
  )
}

function Input({ taskDescription, setTaskDescription, onAddTask }) {
  function handleSubmit(e) {
    e.preventDefault()
    onAddTask(taskDescription)
    setTaskDescription('')
  }

  return (
    <form className="flex items-center space-x-4 mb-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What do you need to do?"
        className="flex-1 px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <button className="px-6 py-3 bg-emerald-500 text-white cursor-pointer font-semibold rounded-lg hover:bg-emerald-600 transition">
        ➕ Add Task
      </button>
    </form>
  )
}

function List({ tasks, onToggleTask, onDeleteTask }) {
  return (
    <div className="space-y-3 mt-2">
      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center">No tasks yet. Add some! 🚀</p>
      ) : (
        tasks.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            onToggleTask={onToggleTask}
            onDeleteTask={onDeleteTask}
          />
        ))
      )}
    </div>
  )
}

function ListItem({ item, onToggleTask, onDeleteTask }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-gray-100 rounded-xl shadow-md">
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          className="w-5 h-5 text-blue-500 rounded cursor-pointer"
          checked={item.isDone}
          onChange={() => onToggleTask(item.id)}
        />
        <span
          className={`text-gray-800 font-medium ${
            item.isDone ? 'line-through text-gray-500' : ''
          }`}
        >
          {item.task}
        </span>
      </div>
      <button
        className="text-red-400 hover:text-red-600 text-xl cursor-pointer"
        onClick={() => onDeleteTask(item.id)}
      >
        ❌
      </button>
    </div>
  )
}

function Footer({ tasks }) {
  const numTasks = tasks.length
  const taskDone = tasks.filter((item) => item.isDone).length
  const percentDone = numTasks > 0 ? Math.round((taskDone / numTasks) * 100) : 0

  return (
    <footer className="mt-auto py-4 text-white text-center text-xl">
      {numTasks === 0 ? (
        <p>Start adding tasks 🚀</p>
      ) : percentDone === 100 ? (
        '🎉 Congratulations! All tasks are done!'
      ) : (
        `${numTasks} tasks | ${taskDone} done (${percentDone}%)`
      )}
      <p className="text-sm">Made with 💜 | Powered by React & Tailwind CSS</p>
    </footer>
  )
}

Input.propTypes = {
  taskDescription: PropTypes.string.isRequired,
  setTaskDescription: PropTypes.func.isRequired,
  onAddTask: PropTypes.func.isRequired,
}

List.propTypes = {
  tasks: PropTypes.array.isRequired,
  onToggleTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
}

ListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
  }).isRequired,
  onToggleTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
}

Footer.propTypes = {
  tasks: PropTypes.array.isRequired,
}
