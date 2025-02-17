import { useState } from 'react'
import ListItem from './ListItem'
import PropTypes from 'prop-types'

export default function List({ tasks, onToggleTask, onDeleteTask, setTasks }) {
  const [sortBy, setSortBy] = useState('input')
  let sortedTasks
  if (sortBy === 'input') sortedTasks = tasks
  if (sortBy === 'alphabetical')
    sortedTasks = tasks.slice().sort((a, b) => a.task.localeCompare(b.task))
  if (sortBy === 'completed')
    sortedTasks = tasks
      .slice()
      .sort((a, b) => Number(a.isDone) - Number(b.isDone))
  return (
    <>
      <div className="space-y-3 m-2 p-2">
        {tasks.length === 0 ? (
          <p className="text-gray-500 text-center">
            No tasks yet. Add some! 🚀
          </p>
        ) : (
          sortedTasks.map((item) => (
            <ListItem
              key={item.id}
              item={item}
              onToggleTask={onToggleTask}
              onDeleteTask={onDeleteTask}
            />
          ))
        )}
      </div>
      <div className="flex mb-4 space-x-4">
        <select
          className="px-4 py-2 border bg-gradient-to-r from-amber-400 to-rose-500 cursor-pointer font-semibold rounded-4xl shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort by Input Order</option>
          <option value="alphabetical">Sort Alphabetically</option>
          <option value="completed">Sort by Completed</option>
        </select>
        <button
          className="px-4 py-2 border bg-gradient-to-r from-amber-400 to-rose-500 cursor-pointer font-semibold rounded-4xl shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          onClick={() => setTasks([])}
        >
          Clear List
        </button>
      </div>
    </>
  )
}
List.propTypes = {
  tasks: PropTypes.array.isRequired,
  onToggleTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  setTasks: PropTypes.func.isRequired,
}
