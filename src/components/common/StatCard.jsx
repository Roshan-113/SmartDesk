export default function StatCard({ title, value, icon: Icon, gradient }) {
  return (
    <div className={`bg-gradient-to-br ${gradient} text-white rounded-lg shadow-md p-6`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white text-opacity-80 text-sm">{title}</p>
          <p className="text-3xl font-bold mt-2">{value}</p>
        </div>
        <Icon className="w-12 h-12 text-white text-opacity-60" />
      </div>
    </div>
  )
}
