export default function StatCard({ title, value, icon: Icon, gradient, trend }) {
  return (
    <div className={`card-gradient ${gradient} relative overflow-hidden group cursor-pointer`}>
      <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 group-hover:scale-125 transition-transform duration-500"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/5 rounded-full -ml-16 -mb-16 group-hover:scale-110 transition-transform duration-500"></div>
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <p className="text-white/90 text-sm font-bold mb-2 uppercase tracking-wider">{title}</p>
            <p className="text-5xl font-black text-white mb-1">{value}</p>
            {trend && (
              <div className="flex items-center space-x-1 mt-3">
                <span className={`px-2 py-1 rounded-lg text-xs font-bold ${trend > 0 ? 'bg-green-400/30 text-green-100' : 'bg-red-400/30 text-red-100'} backdrop-blur-sm`}>
                  {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
                </span>
                <span className="text-white/80 text-xs font-medium">vs last month</span>
              </div>
            )}
          </div>
          <div className="bg-white/25 p-4 rounded-2xl backdrop-blur-md shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
            <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
          </div>
        </div>
      </div>
    </div>
  )
}
