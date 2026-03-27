export default function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 border border-gray-300',
    success: 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border border-green-300',
    warning: 'bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-800 border border-yellow-300',
    danger: 'bg-gradient-to-r from-red-100 to-rose-100 text-red-800 border border-red-300',
    info: 'bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border border-blue-300'
  }

  return (
    <span className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-sm ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}
