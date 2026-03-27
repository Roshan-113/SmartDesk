export default function StatCard({ title, value, icon: Icon, gradient, trend }) {
  return (
    <div className={`card-gradient ${gradient} relative overflow-hidden group`}>
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-300"></div>
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-white/80 text-sm font-medium mb-1">{title}</p>
            <p className="text-4xl font-bold text-white">{value}</p>
            {trend && (
              <p className="text-white/90 text-xs mt-2 flex items-center">
                <span className="mr-1">{trend > 0 ? '↑' : '↓'}</span>
                {Math.abs(trend)}% from last month
              </p>
            )}
          </div>
          <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
            <Icon className="w-7 h-7 text-white" />
          </div>
        </div>
      </div>
    </div>
  )
}
