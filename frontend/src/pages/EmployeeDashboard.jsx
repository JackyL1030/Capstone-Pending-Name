import Navbar from "../components/Navbar";
import "../styles/Dashboard.css";

export default function EmployeeDashboard() {
  return (
    <div className="dashboard-container">
      <Navbar />

      <h1 className="dashboard-title">Employee Dashboard</h1>
      <div className="dashboard-card">
        <h2>My Upcoming Shifts</h2>
        <div className="shift-card">
          <h3>Monday</h3>
          <p>9:00 AM - 5:00 PM</p>
          <button>Request Swap</button>
        </div>
      </div>
    </div>
  );
}
