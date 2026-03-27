export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-700 hover:bg-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700'
  }

  return (
    <button
      className={`px-4 py-2 rounded-lg transition-colors ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
