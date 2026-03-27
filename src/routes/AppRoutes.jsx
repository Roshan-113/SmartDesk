import { Routes, Route, Navigate } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import RoleRoute from './RoleRoute'
import { USER_ROLES } from '../utils/constants'

// Auth Pages
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'

// User Pages
import UserDashboard from '../pages/user/Dashboard'
import CreateTicket from '../pages/user/CreateTicket'
import MyTickets from '../pages/user/MyTickets'

// Agent Pages
import AgentDashboard from '../pages/agent/Dashboard'
import AgentTickets from '../pages/agent/Tickets'

// Admin Pages
import AdminDashboard from '../pages/admin/Dashboard'
import AllTickets from '../pages/admin/AllTickets'
import UserManagement from '../pages/admin/UserManagement'
import Analytics from '../pages/admin/Analytics'

// Shared Pages
import TicketDetail from '../pages/shared/TicketDetail'
import Unauthorized from '../pages/shared/Unauthorized'

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      
      {/* User Routes */}
      <Route path="/user/dashboard" element={
        <RoleRoute allowedRoles={[USER_ROLES.USER]}>
          <UserDashboard />
        </RoleRoute>
      } />
      <Route path="/user/tickets/create" element={
        <RoleRoute allowedRoles={[USER_ROLES.USER]}>
          <CreateTicket />
        </RoleRoute>
      } />
      <Route path="/user/tickets" element={
        <RoleRoute allowedRoles={[USER_ROLES.USER]}>
          <MyTickets />
        </RoleRoute>
      } />
      
      {/* Agent Routes */}
      <Route path="/agent/dashboard" element={
        <RoleRoute allowedRoles={[USER_ROLES.AGENT]}>
          <AgentDashboard />
        </RoleRoute>
      } />
      <Route path="/agent/tickets" element={
        <RoleRoute allowedRoles={[USER_ROLES.AGENT]}>
          <AgentTickets />
        </RoleRoute>
      } />
      
      {/* Admin Routes */}
      <Route path="/admin/dashboard" element={
        <RoleRoute allowedRoles={[USER_ROLES.ADMIN]}>
          <AdminDashboard />
        </RoleRoute>
      } />
      <Route path="/admin/tickets" element={
        <RoleRoute allowedRoles={[USER_ROLES.ADMIN]}>
          <AllTickets />
        </RoleRoute>
      } />
      <Route path="/admin/users" element={
        <RoleRoute allowedRoles={[USER_ROLES.ADMIN]}>
          <UserManagement />
        </RoleRoute>
      } />
      <Route path="/admin/analytics" element={
        <RoleRoute allowedRoles={[USER_ROLES.ADMIN]}>
          <Analytics />
        </RoleRoute>
      } />
      
      {/* Shared Routes */}
      <Route path="/tickets/:id" element={
        <PrivateRoute>
          <TicketDetail />
        </PrivateRoute>
      } />
      
      {/* Default Route */}
      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}
