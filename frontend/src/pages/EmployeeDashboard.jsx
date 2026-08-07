import useAuth from "../context/useAuth";
import Navbar from "../components/Navbar";

export default function EmployeeDashboard() {
  const { user } = useAuth();

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <h1 className="dashboard-title">Employee Dashboard</h1>
        <div className="dashboard-card">
          <p>Your schedule will appear here.</p>
        </div>
      </div>
    </>
  );
}
