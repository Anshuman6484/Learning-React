import PropTypes from 'prop-types'
export default function ListItem({ item, onToggleTask, onDeleteTask }) {
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
ListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
  }).isRequired,
  onToggleTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
}
