import { useState } from 'react'

import Login from './pages/Login'
import ManagerDashboard from './pages/ManagerDashboard'
import EmployeeDashboard from './pages/EmployeeDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Login />
      <ManagerDashboard />
      <EmployeeDashboard />
    </div>
  )
}

export default App
