import Navbar from "../components/Navbar";
import "../styles/Dashboard.css";
import SwapRequestForm from "../components/SwapRequestForm";

export default function EmployeeDashboard() {
  const shiftId = "6a75febf9d5ba1246b86e013";

  const employees = [
    {
      _id: "6a737276b4e93f87b0bb11c9",
      name: "Sarah",
    },
  ];

  return (
    <div className="dashboard-container">
      <Navbar />

      <h1 className="dashboard-title">Employee Dashboard</h1>
      <div className="dashboard-card">
        <h2>My Upcoming Shifts</h2>
        <div className="shift-card">
          <h3>Monday</h3>
          <p>9:00 AM - 5:00 PM</p>
          <SwapRequestForm shiftId={shiftId} employees={employees} />
        </div>
      </div>
    </div>
  );
}
