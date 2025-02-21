import { useState } from 'react'
import { nanoid } from 'nanoid'
import './App.css'
import Title from './components/Title'
import Input from './components/Input'
import Footer from './components/Footer'
import List from './components/List'

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
    <div className="min-h-screen min-w-screen flex flex-col bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 p-6 items-center">
      <Title />
      <div className="max-w-3xl w-full bg-white p-6 rounded-2xl shadow-xl">
        <Input
          taskDescription={taskDescription}
          setTaskDescription={setTaskDescription}
          onAddTask={handleAddTask}
        />
        <List
          tasks={tasks}
          setTasks={setTasks}
          onToggleTask={handleToggleTask}
          onDeleteTask={handleDeleteTask}
        />
      </div>
      <Footer tasks={tasks} />
    </div>
  )
}
