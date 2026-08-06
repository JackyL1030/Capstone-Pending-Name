import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import ManagerDashboard from "./pages/ManagerDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Unauthorized from "./pages/Unauthorized";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized/>} />
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
