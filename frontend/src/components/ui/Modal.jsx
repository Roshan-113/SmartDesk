import { X } from 'lucide-react'

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl max-w-md w-full mx-4 border-2 border-white/50 animate-slideUp">
        <div className="flex items-center justify-between p-6 border-b-2 border-gray-100">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">{title}</h3>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-white hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700 p-2 rounded-xl transition-all duration-300 hover:shadow-lg"
          >
            <X className="w-6 h-6" strokeWidth={2.5} />
          </button>
        </div>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  )
}
