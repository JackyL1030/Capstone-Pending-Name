import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import ManagerDashboard from "./pages/ManagerDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import ProtectedRoutes from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/manager" element={<ManagerDashboard />} />
          <Route path="/employee" element={<EmployeeDashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
