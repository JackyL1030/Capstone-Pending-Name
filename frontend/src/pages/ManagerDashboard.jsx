import useAuth from "../context/useAuth";
import Navbar from "../components/Navbar";

export default function ManagerDashboard() {
  const { user } = useAuth();

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <h1 className="dashboard-title">Manager Dashboard</h1>
        <div className="dashboard-card">
          <p>Manager tools will appear here.</p>
        </div>
      </div>
    </>
  );
}
