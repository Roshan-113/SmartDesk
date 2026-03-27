export default function SmartDeskLogo({ size = "w-10 h-10" }) {
  return (
    <svg className={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Circular background */}
      <circle cx="50" cy="50" r="48" fill="url(#gradient1)" />
      
      {/* Support agent head */}
      <circle cx="50" cy="45" r="15" fill="#FDB777" />
      
      {/* Headset */}
      <path d="M35 42 Q35 35 50 35 Q65 35 65 42" stroke="#1E40AF" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="35" cy="45" r="4" fill="#1E40AF" />
      <circle cx="65" cy="45" r="4" fill="#1E40AF" />
      
      {/* Microphone */}
      <path d="M50 52 L45 58" stroke="#1E40AF" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="43" cy="60" r="2.5" fill="#1E40AF" />
      
      {/* Body/Shirt */}
      <path d="M35 60 L35 75 Q35 80 40 80 L60 80 Q65 80 65 75 L65 60 Z" fill="#4B5563" />
      
      {/* Tie */}
      <path d="M50 60 L47 75 L50 80 L53 75 Z" fill="#F97316" />
      
      {/* Ticket icon (top right) */}
      <g transform="translate(70, 15)">
        <rect x="0" y="0" width="12" height="16" rx="2" fill="#3B82F6" />
        <line x1="2" y1="4" x2="10" y2="4" stroke="white" strokeWidth="1.5" />
        <line x1="2" y1="7" x2="10" y2="7" stroke="white" strokeWidth="1.5" />
        <line x1="2" y1="10" x2="8" y2="10" stroke="white" strokeWidth="1.5" />
      </g>
      
      {/* Phone icon (right) */}
      <g transform="translate(75, 45)">
        <path d="M2 2 Q0 2 0 4 L0 12 Q0 14 2 14 L10 14 Q12 14 12 12 L12 4 Q12 2 10 2 Z" fill="#10B981" />
        <rect x="3" y="4" width="6" height="7" rx="0.5" fill="white" opacity="0.3" />
      </g>
      
      {/* Chart icon (bottom right) */}
      <g transform="translate(70, 70)">
        <rect x="0" y="8" width="3" height="6" fill="#8B5CF6" />
        <rect x="5" y="4" width="3" height="10" fill="#EC4899" />
        <rect x="10" y="6" width="3" height="8" fill="#06B6D4" />
      </g>
      
      {/* Mail icon (bottom left) */}
      <g transform="translate(15, 70)">
        <rect x="0" y="2" width="14" height="10" rx="1.5" fill="#F97316" />
        <path d="M0 2 L7 7 L14 2" stroke="#FDB777" strokeWidth="1.5" fill="none" />
      </g>
      
      {/* Calendar icon (top left) */}
      <g transform="translate(15, 15)">
        <rect x="0" y="2" width="14" height="12" rx="1.5" fill="#EF4444" />
        <rect x="0" y="2" width="14" height="3" fill="#DC2626" />
        <line x1="3" y1="0" x2="3" y2="4" stroke="#DC2626" strokeWidth="1.5" />
        <line x1="11" y1="0" x2="11" y2="4" stroke="#DC2626" strokeWidth="1.5" />
        <circle cx="4" cy="8" r="1" fill="white" />
        <circle cx="7" cy="8" r="1" fill="white" />
        <circle cx="10" cy="8" r="1" fill="white" />
        <circle cx="4" cy="11" r="1" fill="white" />
        <circle cx="7" cy="11" r="1" fill="white" />
      </g>
      
      {/* Gear icon (left) */}
      <g transform="translate(15, 45)">
        <circle cx="6" cy="6" r="6" fill="#FBBF24" />
        <circle cx="6" cy="6" r="3" fill="#F59E0B" />
        <circle cx="6" cy="1" r="1.5" fill="#FBBF24" />
        <circle cx="6" cy="11" r="1.5" fill="#FBBF24" />
        <circle cx="1" cy="6" r="1.5" fill="#FBBF24" />
        <circle cx="11" cy="6" r="1.5" fill="#FBBF24" />
      </g>
      
      {/* Gradient definitions */}
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DBEAFE" />
          <stop offset="100%" stopColor="#BFDBFE" />
        </linearGradient>
      </defs>
    </svg>
  )
}
