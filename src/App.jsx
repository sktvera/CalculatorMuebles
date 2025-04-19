// src/App.jsx
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Outlet />
    </div>
  )
}