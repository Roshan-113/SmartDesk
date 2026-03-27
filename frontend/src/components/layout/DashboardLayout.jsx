import Sidebar from '../common/Sidebar'
import Header from '../common/Header'

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 overflow-x-hidden">
          <Header />
          <div className="px-8 pb-8">
            <div className="max-w-7xl mx-auto">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
