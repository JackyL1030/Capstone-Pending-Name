import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import ManagerDashboard from "./pages/ManagerDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute role="manager" />}>
          <Route path="/manager" element={<ManagerDashboard />} />
        </Route>
        <Route element={<ProtectedRoute role="employee" />}>
          <Route path="/employee" element={<EmployeeDashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
