import PropTypes from 'prop-types'

export default function Input({ taskDescription, setTaskDescription, onAddTask }) {
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
        className="flex-1 px-4 py-2 border rounded-4xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <button className="px-4 py-2 bg-emerald-500 text-white cursor-pointer font-semibold rounded-4xl hover:bg-emerald-600 transition">
        ➕ Add Task
      </button>
    </form>
  )
}
Input.propTypes = {
  taskDescription: PropTypes.string.isRequired,
  setTaskDescription: PropTypes.func.isRequired,
  onAddTask: PropTypes.func.isRequired,
}
