import PropTypes from 'prop-types'
export default function Footer({ tasks }) {
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
Footer.propTypes = {
  tasks: PropTypes.array.isRequired,
}
