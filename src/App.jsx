import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { TicketProvider } from './context/TicketContext'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <AuthProvider>
      <TicketProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </TicketProvider>
    </AuthProvider>
  )
}

export default App
