function Button({
  children,
  onClick,
  type = 'button',
  className = '',
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`cursor-pointer text-white font-semibold py-2 px-4 rounded-xl transition duration-300 transform hover:scale-105 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
